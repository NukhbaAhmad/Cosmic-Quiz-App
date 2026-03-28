'use client'
import { QuizProvider, useQuiz } from '@/context/quiz-fetch.context'
import { Wrapper } from '@/components/ui/wrapper'
import { TakeQuiz } from './components/take-quiz'
import { ScoreBoard } from './components/score-board'
import { Loader } from '@/components/ui/loading'
import { LOADING_MESSAGES } from '@/lib/generic'

const QuizMainContent = () => {
  const { showScore, quizData, loading } = useQuiz()

  if (loading) {
    return <Loader messages={LOADING_MESSAGES} classNames="min-h-screen" />
  }

  return (
    <Wrapper title={quizData?.quizTitle}>
      {showScore ? <ScoreBoard /> : <TakeQuiz questions={quizData?.questions || []} />}
    </Wrapper>
  )
}

export default function QuizTest() {
  return (
    <QuizProvider>
      <QuizMainContent />
    </QuizProvider>
  )
}
