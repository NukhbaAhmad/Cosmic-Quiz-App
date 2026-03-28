'use client'
import { Button } from '@/components/ui/button'
import { InputField } from '@/components/ui/input'
import { useQuizSubmission } from '@/hooks/use-quiz-submission'
import { StartNewJourney } from './start-new-journey'

export const ScoreBoard = () => {
  const {
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
  } = useQuizSubmission()

  if (isSaved) return <StartNewJourney onReset={handleReset} />

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-2">
        <p className="text-white/50 uppercase tracking-widest text-xs font-bold">Final Score</p>
        <h2 className="text-6xl font-black text-white">{totalScore}</h2>
        <p className="text-xl text-blue-400 italic font-medium">{label}</p>
      </div>

      <div className="space-y-4">
        <InputField
          label="Email (Optional)"
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="cosmos@example.com"
          disabled={loading}
        />
        <InputField
          label="Notes (Optional)"
          id="notes"
          as="textarea"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder="How was your journey?"
          disabled={loading}
        />
      </div>

      <div className="flex flex-col gap-3 pt-4">
        <Button onClick={handleSave} variant="primary" disabled={loading}>
          {loading ? 'Saving...' : 'Save Results'}
        </Button>
        <Button onClick={handleReset} variant="secondary" disabled={loading}>
          Try Again
        </Button>
      </div>
    </div>
  )
}
