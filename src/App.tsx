import React, { useState, useEffect } from 'react';
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
} from './lib/storage';
import { getCurrentUser, logout } from './lib/auth';
import { MockAttempt, MockConfig, User } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavTab>('home');
  const [activeSession, setActiveSession] = useState<ActiveTestSession | null>(null);
  const [viewingResultAttempt, setViewingResultAttempt] = useState<MockAttempt | null>(null);
  const [previewAsStudent, setPreviewAsStudent] = useState(false);

  // Authentication State
  const [currentUser, setCurrentUser] = useState<User | null>(null);
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
    const user = getCurrentUser();
    setCurrentUser(user);
    refreshCounts();

    // Check if user directly bookmarked #/admin without being logged in
    if (window.location.hash.startsWith('#/admin') || window.location.pathname.startsWith('/admin')) {
      if (!user) {
        setAuthReason('Please sign in to access the platform.');
        setIsAuthModalOpen(true);
      }
    }
  }, []);

  const refreshCounts = () => {
    setCoursesCount(getCourses(true).length);
    setQuestionsCount(getQuestions(undefined, 'all', true).length);
  };

  const handleLogout = () => {
    logout();
    setCurrentUser(null);
    setPreviewAsStudent(false);
    window.location.hash = '';
    showToast('Signed out successfully');
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
      setPreviewAsStudent(false);
    } else if (pendingTestAction) {
      const action = pendingTestAction;
      setPendingTestAction(null);
      setTimeout(() => action(), 150);
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

  // ===================== AUTOMATIC ROLE-BASED VIEW ROUTING =====================
  // When authenticated as admin and not explicitly in student preview mode:
  if (currentUser && currentUser.role === 'admin' && !previewAsStudent) {
    return (
      <AdminDashboard
        currentUser={currentUser}
        onLogout={handleLogout}
        onSwitchToStudentView={() => {
          setPreviewAsStudent(true);
          refreshCounts();
        }}
      />
    );
  }

  // ===================== STUDENT / NORMAL USER APPLICATION =====================
  return (
    <div className="min-h-screen bg-[#F8FBFF] text-[#0F172A] flex flex-col selection:bg-sky-500/20 selection:text-sky-900 font-sans">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-2xl glass-dock border border-[#38BDF8]/40 text-[#0284C7] text-xs font-mono shadow-[0_8px_30px_rgba(2,132,199,0.15)] animate-bounce">
          {toastMessage}
        </div>
      )}

      {/* Admin Preview Mode Top Banner */}
      {currentUser && currentUser.role === 'admin' && previewAsStudent && (
        <div className="bg-[#EFF8FF] border-b border-[#38BDF8]/40 px-4 py-2 text-center text-xs font-mono text-[#0284C7] flex items-center justify-center gap-3">
          <span>Viewing Student Platform as Administrator Preview</span>
          <button
            onClick={() => setPreviewAsStudent(false)}
            className="px-3 py-1 rounded-full bg-[#0284C7] text-white font-bold hover:bg-[#0369a1] transition-all text-[11px]"
          >
            Return to Admin Dashboard
          </button>
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
            onTabChange={(tab) => setActiveTab(tab)}
            currentUser={currentUser}
            onOpenAuth={() => {
              setAuthReason('Sign in or create an account to track your progress and tests.');
              setIsAuthModalOpen(true);
            }}
            onLogout={handleLogout}
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
                onViewTests={() => setActiveTab('tests')}
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
