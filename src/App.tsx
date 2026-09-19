import React, { useState, useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import { Navigation, NavTab } from './components/Navigation';
import { Hero } from './components/Hero';
import { TestsView } from './components/TestsView';
import { CoursesView } from './components/CoursesView';
import { ProgressView } from './components/ProgressView';
import { MockConfigModal } from './components/MockConfigModal';
import { MockTestView } from './components/MockTestView';
import { TestResultView } from './components/TestResultView';
import { AuthModal } from './components/AuthModal';
import { AdminDashboard } from './components/admin/AdminDashboard';
import {
  ActiveTestSession,
  getCourses,
  getQuestions,
  getActiveSession,
  initializeMockSession,
  createRetryWrongSession,
  fetchCoursesFromSupabase,
  fetchQuestionsFromSupabase,
} from './lib/storage';
import { getCurrentUser, initAuthSession, onAuthStateChanged, logout } from './lib/auth';
import { MockAttempt, MockConfig, User } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [activeSession, setActiveSession] = useState<ActiveTestSession | null>(null);
  const [viewingResultAttempt, setViewingResultAttempt] = useState<MockAttempt | null>(null);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);

  // Whether the admin dashboard is currently shown
  const [showAdminDashboard, setShowAdminDashboard] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authReason, setAuthReason] = useState<string>('Please sign in or create an account to start your mock test.');
  const [pendingTestAction, setPendingTestAction] = useState<(() => void) | null>(null);

  // Modals
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [preselectedCourseId, setPreselectedCourseId] = useState<string | undefined>(undefined);

  // Live count trackers (Published tests only for student view)
  const [coursesCount, setCoursesCount] = useState(getCourses(true).length);
  const [questionsCount, setQuestionsCount] = useState(getQuestions(undefined, 'all', true).length);

  // Toast notifications
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  useEffect(() => {
    let isMounted = true;

    async function loadAuth() {
      try {
        const user = await initAuthSession();
        if (isMounted) {
          setCurrentUser(user);
          if (user?.role === 'admin') {
            setShowAdminDashboard(true);
          }
        }
      } catch (err) {
        console.warn('Session init notice:', err);
      } finally {
        if (isMounted) {
          setAuthLoading(false);
        }
      }
    }

    loadAuth();
    refreshCounts();

    const unsubscribe = onAuthStateChanged((user) => {
      if (isMounted) {
        setCurrentUser(user);
        if (user?.role === 'admin') {
          setShowAdminDashboard(true);
        } else if (!user) {
          setShowAdminDashboard(false);
        }
      }
    });

    const checkHash = () => {
      const isHashAdmin = window.location.hash.includes('admin') || window.location.pathname.includes('/admin');
      const u = getCurrentUser();
      if (isHashAdmin) {
        if (u && u.role === 'admin') {
          setShowAdminDashboard(true);
        } else {
          setAuthReason('Please sign in to continue.');
          setIsAuthModalOpen(true);
        }
      } else if (u && u.role === 'admin') {
        setShowAdminDashboard(true);
      }
    };

    checkHash();
    window.addEventListener('hashchange', checkHash);
    return () => {
      isMounted = false;
      unsubscribe();
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const refreshCounts = async () => {
    try {
      const freshCourses = await fetchCoursesFromSupabase(true);
      setCoursesCount(freshCourses.length);
      const freshQuestions = await fetchQuestionsFromSupabase(undefined, 'all', true);
      setQuestionsCount(freshQuestions.length);
    } catch {
      setCoursesCount(getCourses(true).length);
      setQuestionsCount(getQuestions(undefined, 'all', true).length);
    }
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    setShowAdminDashboard(false);
    setActiveSession(null);
    setViewingResultAttempt(null);
    setActiveTab('home');
    window.location.hash = '';
    showToast('Signed out successfully');
  };

  const handleTabChange = (tab: NavTab) => {
    if ((tab === 'tests' || tab === 'progress') && !currentUser) {
      setAuthReason('Sign in with your Registration Number to access your tests and progress tracking.');
      setIsAuthModalOpen(true);
      return;
    }
    setActiveTab(tab);
  };

  const requireAuth = (onSuccess: () => void, reason = 'Authentication is required before starting any test.') => {
    if (currentUser) {
      onSuccess();
    } else {
      setAuthReason(reason);
      setPendingTestAction(() => onSuccess);
      setIsAuthModalOpen(true);
    }
  };

  const handleAuthenticated = (user: User) => {
    setCurrentUser(user);
    showToast(`Welcome, ${user.name}`);
    if (user.role === 'admin') {
      setShowAdminDashboard(true);
    } else if (pendingTestAction) {
      const action = pendingTestAction;
      setPendingTestAction(null);
      setTimeout(() => action(), 150);
    }
  };

  // Name click handler: admin -> toggle admin dashboard, student -> go to progress/profile
  const handleNameClick = () => {
    if (!currentUser) return;
    if (currentUser.role === 'admin') {
      setShowAdminDashboard((prev) => !prev);
      refreshCounts();
    } else {
      setActiveTab('progress');
    }
  };

  // Launch fresh mock test from config with auth guard
  const handleStartTest = (config: MockConfig) => {
    requireAuth(() => {
      const newSession = initializeMockSession(config);
      setViewingResultAttempt(null);
      setActiveSession(newSession);
    }, 'Authentication is required before starting any test.');
  };

  // Finish and show results
  const handleFinishTest = (attempt: MockAttempt) => {
    setActiveSession(null);
    setViewingResultAttempt(attempt);
    refreshCounts();
  };

  // Retry only wrong questions
  const handleRetryWrong = (attempt: MockAttempt) => {
    requireAuth(() => {
      const retrySession = createRetryWrongSession(attempt);
      if (!retrySession) {
        showToast('No incorrect questions to re-attempt in this test.');
        return;
      }
      setViewingResultAttempt(null);
      setActiveSession(retrySession);
    });
  };

  // Resume uncompleted test
  const handleResumeTest = (session: ActiveTestSession) => {
    requireAuth(() => {
      setViewingResultAttempt(null);
      setActiveSession(session);
    });
  };

  // ===================== AUTH LOADING SCREEN =====================
  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#F8FBFF] flex flex-col items-center justify-center p-6 text-center select-none font-sans">
        <div className="relative mb-5">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-blue-600 flex items-center justify-center shadow-[0_8px_30px_rgba(2,132,199,0.25)] animate-pulse">
            <Sparkles className="w-8 h-8 text-white" />
          </div>
        </div>
        <p className="text-xs font-mono uppercase tracking-[0.25em] text-[#0284C7] font-semibold">PREP STUDY LAB</p>
        <p className="text-xs text-[#64748B] font-mono mt-1 tracking-wider">RESTORING VERIFIED SESSION...</p>
      </div>
    );
  }

  // ===================== ADMIN DASHBOARD VIEW =====================
  if (currentUser && currentUser.role === 'admin' && showAdminDashboard) {
    return (
      <AdminDashboard
        currentUser={currentUser}
        onLogout={handleLogout}
        onNavigateToStudentPlatform={() => {
          setShowAdminDashboard(false);
          refreshCounts();
        }}
      />
    );
  }

  // ===================== NORMAL APPLICATION (Student or Admin browsing student platform) =====================
  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#0F172A] flex flex-col selection:bg-sky-500/20 selection:text-sky-900 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl glass-dock border border-[#38BDF8]/40 text-[#0284C7] text-xs font-mono shadow-[0_8px_30px_rgba(2,132,199,0.15)] animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* When active test is running: Full examination mode */}
      {activeSession ? (
        <MockTestView
          session={activeSession}
          currentUser={currentUser}
          onFinishTest={handleFinishTest}
          onExitTest={() => setActiveSession(null)}
        />
      ) : viewingResultAttempt ? (
        /* Result Page with exact option order playback */
        <TestResultView
          attempt={viewingResultAttempt}
          onRetryWrong={handleRetryWrong}
          onBackToDashboard={() => setViewingResultAttempt(null)}
        />
      ) : (
        /* Normal Application Shell */
        <>
          {/* Floating Glass Navigation Dock */}
          <Navigation
            activeTab={activeTab}
            onTabChange={handleTabChange}
            currentUser={currentUser}
            onOpenAuth={() => {
              setAuthReason('Sign in or create an account to track your progress and tests.');
              setIsAuthModalOpen(true);
            }}
            onLogout={handleLogout}
            onNameClick={handleNameClick}
          />

          {/* Main Tab Content */}
          <main className="flex-1">
            {activeTab === 'home' && (
              <Hero
                onStartPracticing={() => {
                  requireAuth(() => {
                    setPreselectedCourseId(undefined);
                    setIsConfigModalOpen(true);
                  });
                }}
                onViewTests={() => handleTabChange('tests')}
                totalCourses={coursesCount}
                totalQuestions={questionsCount}
              />
            )}

            {activeTab === 'tests' && (
              <TestsView
                currentUser={currentUser}
                onOpenConfig={() => {
                  requireAuth(() => {
                    setPreselectedCourseId(undefined);
                    setIsConfigModalOpen(true);
                  });
                }}
                onResumeTest={handleResumeTest}
                onViewAttemptResult={(att) => setViewingResultAttempt(att)}
                onRetryAttemptWrong={handleRetryWrong}
                onOpenAuth={() => {
                  setAuthReason('Sign in with your Registration Number to access your test dashboard.');
                  setIsAuthModalOpen(true);
                }}
              />
            )}

            {activeTab === 'courses' && (
              <CoursesView
                onStartCourseTest={(cId) => {
                  requireAuth(() => {
                    setPreselectedCourseId(cId);
                    setIsConfigModalOpen(true);
                  });
                }}
              />
            )}

            {activeTab === 'progress' && (
              <ProgressView
                currentUser={currentUser}
                onStartPracticing={() => {
                  requireAuth(() => {
                    setPreselectedCourseId(undefined);
                    setIsConfigModalOpen(true);
                  });
                }}
                onOpenAuth={() => {
                  setAuthReason('Sign in with your Registration Number to view your progress analytics.');
                  setIsAuthModalOpen(true);
                }}
              />
            )}
          </main>
        </>
      )}

      {/* Modals */}
      <MockConfigModal
        isOpen={isConfigModalOpen}
        onClose={() => setIsConfigModalOpen(false)}
        onStartTest={handleStartTest}
        preselectedCourseId={preselectedCourseId}
      />

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => {
          setIsAuthModalOpen(false);
          setPendingTestAction(null);
        }}
        onAuthenticated={handleAuthenticated}
        reasonMessage={authReason}
      />
    </div>
  );
};
export default App;
