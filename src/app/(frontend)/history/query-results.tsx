'use client'
import { useQuizHistory } from '@/hooks/use-quiz-history'
import { RecordCards } from './record-cards'
import { Searchbar } from '@/components/ui/search-bar'

export const QueryResults = () => {
  const { email, setEmail, loading, fetchHistory, hasSearched, history } = useQuizHistory()

  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500 w-full max-w-4xl mx-auto">
      <Searchbar
        value={email}
        placeholder="Enter your email..."
        onChange={(e) => setEmail(e.target.value)}
        onSearch={fetchHistory}
        loading={loading}
      />
      <RecordCards loading={loading} hasSearched={hasSearched} history={history} />
    </div>
  )
}
