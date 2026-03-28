'use client'
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react'
import { QuizService } from '@/services/quiz.service'
import { QuizData, Range } from '@/types/quiz'

interface QuizContextType {
  quizData: QuizData
  ranges: Range[]
  loading: boolean
  answers: Record<number, number>
  setAnswer: (id: number, score: number) => void
  resetQuiz: () => void
  showScore: boolean
  setShowScore: (val: boolean) => void
  totalScore: number
}

const QuizContext = createContext<QuizContextType | undefined>(undefined)

export const QuizProvider = ({ children }: { children: ReactNode }): React.JSX.Element => {
  const [quizData, setQuizData] = useState<QuizData>()
  const [ranges, setRanges] = useState<Range[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [showScore, setShowScore] = useState<boolean>(false)
  useEffect(() => {
    const initQuiz = async (): Promise<void> => {
      try {
        const [quiz, rangesData] = await Promise.all([
          QuizService.fetchQuiz(),
          QuizService.fetchRanges(),
        ])
        setQuizData(quiz)
        setRanges(rangesData || [])
      } catch (err) {
        console.error('Cosmic fetch failed:', err)
      } finally {
        setLoading(false)
      }
    }
    initQuiz()
  }, [])

  const setAnswer = (id: number, score: number) => {
    setAnswers((prev) => ({ ...prev, [id]: score }))
  }

  const resetQuiz = () => {
    setAnswers({})
    setShowScore(false)
  }

  const totalScore = Object.values(answers).reduce((a, b) => a + b, 0)
  return (
    <QuizContext.Provider
      value={{
        quizData: quizData || { quizTitle: 'Cosmic Quiz', questions: [] },
        ranges,
        loading,
        answers,
        setAnswer,
        resetQuiz,
        showScore,
        setShowScore,
        totalScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  )
}

export const useQuiz = () => {
  const context = useContext(QuizContext)
  if (!context) throw new Error('useQuiz must be used within a QuizProvider')
  return context
}
