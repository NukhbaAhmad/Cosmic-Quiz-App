type Option = { label: string; score: number }
type Question = { id: number; question: string; options: Option[] }
type Result = { range: [number, number]; label: string }
type Range = { minScore: number; maxScore: number; createdAt?: string; label: string }
type ScoreRecord = { id: string; score: number; label: string; notes: string; createdAt: string }
interface QuizData {
  quizTitle: string
  questions: Question[]
}

export type { Option, Question, Result, QuizData, Range, ScoreRecord }
