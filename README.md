# Prep Study Lab

An academic preparation and mock-test web application crafted with a clean, minimal light aesthetic inspired by the Glacier design language.

## Key Features

- **Glacier Light Aesthetic**:
  - Pure crisp light background (`#F8FBFF`) with subtle sky blue accents (`#0284C7`, `#38BDF8`)
  - Frosted glassmorphism panels with delicate borders (`#DCEAF5`) and soft shadows
  - Large editorial serif headings powered by *Playfair Display*
  - Clean data UI, labels, and monospace metadata powered by *Inter*
  - Floating glass navigation dock with Framer Motion `layoutId` animated pill

- **Client-Side PDF Question Extraction**:
  - Direct browser-based PDF parsing powered by `pdfjs-dist`
  - Robust format and magic byte verification
  - Intelligent question parser preserving questions, options, answer keys, and explanations
  - Interactive question review screen prior to saving into library

- **Precision Mock Test Engine**:
  - Configurable question count: 10, 20, 30, 40, 50, All, or Custom
  - Question filters: Random, Unattempted, Previously Wrong, All
  - Dual operational modes:
    - **Practice Mode**: Immediate answer verification, highlighted feedback, and conceptual insights
    - **Exam Mode**: Strict countdown timer, silent answers, auto-submission at 00:00
  - Per-attempt independent option randomization (Fisher-Yates shuffle)
  - Full Question Palette with status indicators (Answered, Marked for Review, Unattempted, Current)
  - Real-time auto-saving and "Resume Test" recovery

- **Faithful Historical Attempt Playback**:
  - Every completed simulation permanently saves the exact displayed question order and randomized option order
  - Reopening a past attempt reproduces the identical question sequence and option arrangement seen during the test
  - "Retry Wrong Questions" feature to quickly drill down on mistakes

- **Account & Progress Analytics**:
  - Seamless account authentication (Name + Password)
  - Persistent personal history: test attempts, accuracy, question count, and performance metrics
  - Automatic synchronization with application-level backend

## Tech Stack

- **Framework**: Vite + React 19 + TypeScript
- **Styling**: Tailwind CSS v4
- **Motion**: Framer Motion
- **Icons**: Lucide React
- **PDF Engine**: pdfjs-dist
- **Backend**: Supabase (PostgreSQL, Row Level Security)

## Setup & Development

```bash
# Install dependencies
npm install

# Copy environment template and configure backend credentials
cp .env.example .env

# Start development server
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```

## Backend Configuration

Configure backend credentials in your `.env` file:

```env
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
```

Execute `supabase/schema.sql` in your database dashboard to set up the necessary tables and Row Level Security policies.
