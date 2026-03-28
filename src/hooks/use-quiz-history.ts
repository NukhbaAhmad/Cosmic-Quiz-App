import { useEffect, useState } from 'react'
import { QuizService } from '@/services/quiz.service'
import { isEmailValid } from '@/utils/validations.utils'
import { ScoreRecord } from '@/types/quiz'
import toast from 'react-hot-toast'

export const useQuizHistory = () => {
  const [email, setEmail] = useState('')
  const [history, setHistory] = useState<ScoreRecord[]>([])
  const [loading, setLoading] = useState(false)
  const [hasSearched, setHasSearched] = useState(false)
  const fetchHistory = async () => {
    if (!isEmailValid(email)) {
      return toast.error('Please enter a valid email.')
    }

    setLoading(true)
    try {
      const data = await QuizService.fetchUserHistory(email)
      setHistory(data || [])
      setHasSearched(true)
      if (data?.length === 0) {
        toast.error('No records found for this email.')
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err: any) {
      toast.error(err.message || 'Failed to fetch history.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (email.trim() === '') {
      setHistory([])
      setHasSearched(false)
    }
  }, [email])

  return { email, setEmail, history, loading, hasSearched, fetchHistory }
}
