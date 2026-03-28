import { useState } from 'react'
import toast from 'react-hot-toast'
import { useQuiz } from '@/context/quiz-fetch.context'
import { getResultLabel } from '@/utils/quiz.utils'
import { validateQuizSubmission } from '@/utils/validations.utils'
import { QuizService } from '@/services/quiz.service'

export const useQuizSubmission = () => {
  const { totalScore, ranges, resetQuiz } = useQuiz()
  const [notes, setNotes] = useState('')
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [isSaved, setIsSaved] = useState(false)

  const label = getResultLabel(totalScore, ranges)

  const handleSave = async () => {
    const error = validateQuizSubmission(email, notes)
    if (error) return toast.error(error)

    setLoading(true)
    try {
      await QuizService.submitResult({
        email: email || undefined,
        score: totalScore,
        label,
        notes: notes || '',
      })
      toast.success('Your journey recorded successfully.! ✨')
      setIsSaved(true)
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message || 'Failed to save score.')
    } finally {
      setLoading(false)
    }
  }

  const handleReset = () => {
    resetQuiz()
    setNotes('')
    setEmail('')
    setIsSaved(false)
  }

  return {
    notes,
    setNotes,
    email,
    setEmail,
    loading,
    isSaved,
    label,
    totalScore,
    handleSave,
    handleReset,
  }
}
