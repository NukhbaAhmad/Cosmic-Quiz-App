import { Button } from '@/components/ui/button'
import { ICONS } from '@/lib/icons'

interface StartNewJourneyProps {
  onReset: () => void
}

export const StartNewJourney = ({ onReset }: StartNewJourneyProps) => (
  <div className="text-center space-y-10 animate-in zoom-in-95 duration-500 py-4">
    <div className="text-6xl animate-bounce">🌌</div>
    <div>
      <p className="text-2xl sm:text-4xl font-black text-white tracking-tight">Score saved.</p>
    </div>

    <div className="flex sm:flex-row flex-col gap-4 justify-center max-w-2xl mx-auto">
      <Button onClick={onReset} variant="secondary">
        {ICONS.QUIZ} Take Another Quiz
      </Button>
      <Button onClick={() => (window.location.href = '/')} variant="secondary">
        {ICONS.HOME} Back to Main Page
      </Button>
    </div>
  </div>
)
