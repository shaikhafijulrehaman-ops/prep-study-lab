-- Prep Study Lab Database Schema
-- Supabase PostgreSQL Schema with Row Level Security (RLS)

-- 1. Courses Table
CREATE TABLE IF NOT EXISTS public.courses (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    description TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 2. PDF Documents Table
CREATE TABLE IF NOT EXISTS public.pdf_documents (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    course_id TEXT REFERENCES public.courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    filename TEXT NOT NULL,
    storage_path TEXT DEFAULT '',
    week_number INTEGER NOT NULL DEFAULT 1,
    extracted_questions_count INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 3. Questions Table
CREATE TABLE IF NOT EXISTS public.questions (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    course_id TEXT REFERENCES public.courses(id) ON DELETE CASCADE,
    week_number INTEGER NOT NULL DEFAULT 1,
    source_pdf_id TEXT REFERENCES public.pdf_documents(id) ON DELETE SET NULL,
    source_pdf_name TEXT DEFAULT '',
    question_text TEXT NOT NULL,
    options JSONB NOT NULL, -- Array of 4 strings: ["Option A", "Option B", "Option C", "Option D"]
    correct_answer_index INTEGER NOT NULL CHECK (correct_answer_index >= 0 AND correct_answer_index <= 3),
    explanation TEXT DEFAULT '',
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 4. Mock Attempts Table
CREATE TABLE IF NOT EXISTS public.mock_attempts (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id TEXT,
    course_name TEXT NOT NULL,
    mode TEXT NOT NULL CHECK (mode IN ('practice', 'exam')),
    total_questions INTEGER NOT NULL,
    score INTEGER NOT NULL,
    percentage NUMERIC(5,2) NOT NULL,
    correct_count INTEGER NOT NULL,
    wrong_count INTEGER NOT NULL,
    unanswered_count INTEGER NOT NULL,
    time_taken_seconds INTEGER NOT NULL,
    time_limit_seconds INTEGER,
    is_completed BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL,
    completed_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- 5. Attempt Items Table (Faithfully stores exact displayed question and randomized option order)
CREATE TABLE IF NOT EXISTS public.attempt_items (
    id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
    attempt_id TEXT REFERENCES public.mock_attempts(id) ON DELETE CASCADE NOT NULL,
    question_id TEXT,
    question_index INTEGER NOT NULL,
    question_text TEXT NOT NULL,
    displayed_options JSONB NOT NULL, -- Exact 4 strings in randomized order as shown during attempt
    selected_option_index INTEGER, -- 0-3 index in displayed_options, or NULL if skipped
    correct_option_index INTEGER NOT NULL, -- 0-3 index in displayed_options
    is_correct BOOLEAN NOT NULL DEFAULT false,
    is_marked_for_review BOOLEAN NOT NULL DEFAULT false,
    time_spent_seconds INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ DEFAULT now() NOT NULL
);

-- Indexes for performance
CREATE INDEX IF NOT EXISTS idx_questions_course_week ON public.questions(course_id, week_number);
CREATE INDEX IF NOT EXISTS idx_attempts_created ON public.mock_attempts(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_attempt_items_order ON public.attempt_items(attempt_id, question_index ASC);

-- Enable Row Level Security (RLS) on all tables
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.pdf_documents ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.questions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.mock_attempts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.attempt_items ENABLE ROW LEVEL SECURITY;

-- Courses Policies
DROP POLICY IF EXISTS "Public read access for courses" ON public.courses;
CREATE POLICY "Public read access for courses" 
    ON public.courses FOR SELECT 
    USING (true);

DROP POLICY IF EXISTS "Allow insert for courses" ON public.courses;
CREATE POLICY "Allow insert for courses" 
    ON public.courses FOR INSERT 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Allow update for courses" ON public.courses;
CREATE POLICY "Allow update for courses" 
    ON public.courses FOR UPDATE 
    USING (true);

-- PDF Documents Policies
DROP POLICY IF EXISTS "Public read access for pdf_documents" ON public.pdf_documents;
CREATE POLICY "Public read access for pdf_documents" 
    ON public.pdf_documents FOR SELECT 
    USING (true);

DROP POLICY IF EXISTS "Allow insert for pdf_documents" ON public.pdf_documents;
CREATE POLICY "Allow insert for pdf_documents" 
    ON public.pdf_documents FOR INSERT 
    WITH CHECK (true);

-- Questions Policies
DROP POLICY IF EXISTS "Public read access for questions" ON public.questions;
CREATE POLICY "Public read access for questions" 
    ON public.questions FOR SELECT 
    USING (true);

DROP POLICY IF EXISTS "Allow insert for questions" ON public.questions;
CREATE POLICY "Allow insert for questions" 
    ON public.questions FOR INSERT 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Allow update for questions" ON public.questions;
CREATE POLICY "Allow update for questions" 
    ON public.questions FOR UPDATE 
    USING (true);

-- Mock Attempts Policies
DROP POLICY IF EXISTS "Users can read own attempts" ON public.mock_attempts;
CREATE POLICY "Users can read own attempts" 
    ON public.mock_attempts FOR SELECT 
    USING (true);

DROP POLICY IF EXISTS "Users can insert own attempts" ON public.mock_attempts;
CREATE POLICY "Users can insert own attempts" 
    ON public.mock_attempts FOR INSERT 
    WITH CHECK (true);

DROP POLICY IF EXISTS "Users can update own attempts" ON public.mock_attempts;
CREATE POLICY "Users can update own attempts" 
    ON public.mock_attempts FOR UPDATE 
    USING (true);

-- Attempt Items Policies
DROP POLICY IF EXISTS "Users can read own attempt items" ON public.attempt_items;
CREATE POLICY "Users can read own attempt items" 
    ON public.attempt_items FOR SELECT 
    USING (true);

DROP POLICY IF EXISTS "Users can insert attempt items" ON public.attempt_items;
CREATE POLICY "Users can insert attempt items" 
    ON public.attempt_items FOR INSERT 
    WITH CHECK (true);

-- Initial Academic Courses Seed
INSERT INTO public.courses (id, code, name, description)
VALUES 
  ('course-cloud-01', 'CS601', 'Distributed Cloud Systems', 'Foundations of virtualization, distributed storage, consensus protocols, and elasticity.'),
  ('course-dl-02', 'CS702', 'Deep Learning Architectures', 'Backpropagation dynamics, convolutional networks, attention mechanisms, and optimization.'),
  ('course-algo-03', 'CS503', 'Advanced Data Structures & Algorithms', 'Amortized analysis, graph algorithms, dynamic programming, and complexity classes.')
ON CONFLICT (id) DO NOTHING;

-- Initial Questions Seed
INSERT INTO public.questions (id, course_id, week_number, source_pdf_name, question_text, options, correct_answer_index, explanation)
VALUES
  ('q-cloud-w1-01', 'course-cloud-01', 1, 'Cloud_Systems_Week1.pdf', 'Which virtualization technique allows the guest operating system kernel to be modified to execute hypercalls rather than intercepting privileged CPU instructions?', '["Hardware-Assisted Virtualization", "Paravirtualization", "Full Virtualization with Binary Translation", "Operating System-Level Containerization"]'::jsonb, 1, 'Paravirtualization involves modifying the guest OS kernel so that privileged operations are issued via explicit hypercalls directly to the hypervisor.'),
  ('q-cloud-w1-02', 'course-cloud-01', 1, 'Cloud_Systems_Week1.pdf', 'According to the CAP theorem in distributed systems, what does the "P" guarantee signify during a network split?', '["The system operates without any persistent storage", "The system continues to function despite an arbitrary number of dropped messages between nodes", "The system ensures strict linearizability across all concurrent transactions", "The system guarantees zero network latency for all read requests"]'::jsonb, 1, 'Partition tolerance (P) means the cluster continues operating despite arbitrary packet loss or communication breakdown between nodes.'),
  ('q-cloud-w1-03', 'course-cloud-01', 1, 'Cloud_Systems_Week1.pdf', 'In cloud elasticity models, what distinguishes horizontal scaling (scaling out) from vertical scaling (scaling up)?', '["Horizontal scaling adds more instances of computing resources; vertical scaling adds CPU or RAM to an existing node", "Horizontal scaling only applies to relational databases; vertical scaling applies to stateless web servers", "Horizontal scaling requires downtime; vertical scaling never incurs downtime", "Horizontal scaling reduces redundancy; vertical scaling increases fault tolerance across failure domains"]'::jsonb, 0, 'Horizontal scaling increases system capacity by adding more compute instances, whereas vertical scaling increases capacity by upgrading hardware on a single instance.'),
  ('q-dl-w1-01', 'course-dl-02', 1, 'DL_Module_Week1.pdf', 'What issue commonly arises in deep neural networks when using the standard Sigmoid activation function across many layers?', '["Exploding gradient in early layers due to derivative unboundedness", "Vanishing gradient problem because the maximum derivative is 0.25", "Loss of differentiability at x = 0", "Dead neurons that permanently output negative values"]'::jsonb, 1, 'The derivative of the sigmoid function peaks at 0.25; chaining multiple sigmoid derivatives causes backpropagated gradients to shrink exponentially toward zero.'),
  ('q-algo-w1-01', 'course-algo-03', 1, 'Algorithms_Review_W1.pdf', 'What is the amortized time complexity of inserting an element into a dynamic array that doubles in capacity whenever full?', '["O(N)", "O(1)", "O(log N)", "O(N log N)"]'::jsonb, 1, 'Although individual expansions cost O(N), the cost is spread out over N insertions, yielding O(1) amortized time per operation by the accounting method.')
ON CONFLICT (id) DO NOTHING;
