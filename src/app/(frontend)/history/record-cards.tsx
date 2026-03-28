'use client'
import { DataGuard } from '@/components/ui/data-guard'
import { Loader } from '@/components/ui/loading'
import { FETCHING_RECORDS } from '@/lib/generic'
import { ScoreRecord } from '@/types/quiz'

interface RecordCardsProps {
  history: ScoreRecord[]
  hasSearched: boolean
  loading: boolean
}

export const RecordCards = ({ history, hasSearched, loading }: RecordCardsProps) => {
  if (loading) {
    return <Loader messages={FETCHING_RECORDS} />
  }
  return (
    <DataGuard
      isEmpty={history.length === 0}
      emptyConfig={{
        title: 'No Records',
        message: hasSearched
          ? 'Oops! No records found for this email.'
          : 'Enter your email above to see your journey details.',
      }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-[60vh] overflow-y-auto p-2 custom-scrollbar">
        {history.map((res) => (
          <div
            key={res.id}
            className="flex flex-col justify-between p-5 rounded-2xl border border-white/10 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-md hover:border-blue-500/30 transition-all duration-300"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start gap-4">
                <p className="text-lg font-bold text-white leading-tight">
                  {res.label.split('—')[0]}
                </p>
                <span className="text-2xl font-black text-blue-400 drop-shadow-sm">
                  {res.score}
                </span>
              </div>

              {res.notes && (
                <p className="text-xs text-blue-200/60 italic leading-relaxed border-l-2 border-blue-500/30 pl-3">
                  {res.notes}
                </p>
              )}
            </div>

            <div className="mt-1 pt-1 border-t border-white/5 flex  justify-between items-center text-[10px] text-white/30 font-mono uppercase">
              <span>Date Logged</span>
              <span>{new Date(res.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        ))}
      </div>
    </DataGuard>
  )
}
