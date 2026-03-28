import { Button } from '@/components/ui/button'
import { DataGuard } from '@/components/ui/data-guard'
import { useQuiz } from '@/context/quiz-fetch.context'
import { ICONS } from '@/lib/icons'
import { Question, Option } from '@/types/quiz'

interface TakeQuizProps {
  questions: Question[]
}

export const TakeQuiz = ({ questions }: TakeQuizProps) => {
  const { answers, setAnswer, setShowScore } = useQuiz()
  const allAnswered = questions?.length === Object.keys(answers).length
  const submitQuiz = () => {
    setShowScore(true)
  }
  return (
    <DataGuard
      isEmpty={!questions || questions.length === 0}
      emptyConfig={{
        title: 'No Questions Found.',
        message: 'Oops! No questions were found for this quiz.',
        icon: ICONS.NODATA,
      }}
    >
      {questions?.map((q: Question) => (
        <section key={q.id} className="border rounded-xl p-4 bg-white/5 backdrop-blur">
          <h2 className="font-semibold text-lg mb-4">{q.question}</h2>
          <div className="space-y-2">
            {q.options.map((opt: Option) => (
              <Button
                key={opt.label}
                variant={answers[q.id] === opt.score ? 'primary' : 'secondary'}
                onClick={() => setAnswer(q.id, opt.score)}
              >
                {opt.label}
              </Button>
            ))}
          </div>
        </section>
      ))}
      <button
        disabled={!allAnswered}
        onClick={submitQuiz}
        className={`mt-6 w-full py-3 rounded text-white font-semibold hover:cursor-pointer ${
          allAnswered ? 'bg-blue-700 hover:bg-blue-800' : 'bg-gray-400 cursor-not-allowed'
        }`}
      >
        Submit Quiz
      </button>
    </DataGuard>
  )
}
