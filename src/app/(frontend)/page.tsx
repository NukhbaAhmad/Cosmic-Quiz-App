'use client'
import { Wrapper } from '@/components/ui/wrapper'
import { Button } from '@/components/ui/button'
import { LinkButton } from '@/components/ui/link'
import { ICONS } from '@/lib/icons'

export default function HomePage() {
  return (
    <Wrapper title="Welcome To CosmoQuiz">
      <div className="flex flex-col gap-6 py-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
        <div className="flex flex-row gap-3">
          <LinkButton href="/quiz" icon={ICONS.QUIZ} title="Take Quiz" />
          <LinkButton href="/history" icon={ICONS.HISTORY} title="View History" />
        </div>

        <div className="relative flex items-center py-2">
          <div className="flex-grow border-t border-white/5"></div>
          <span className="flex-shrink mx-4 text-[10px] uppercase tracking-[0.2em] text-white/20 font-bold">
            Admin Only
          </span>
          <div className="flex-grow border-t border-white/5"></div>
        </div>

        {/* Admin */}
        <Button
          onClick={() => window.open('http://localhost:3000/admin', '_blank')}
          variant="outline"
          className="w-full h-12 opacity-50 hover:opacity-100 border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2 group"
        >
          <span className="text-lg group-hover:scale-110 transition-transform">{ICONS.LOCK}</span>
          <span className="text-xs font-semibold tracking-wider">Admin Dashboard</span>
        </Button>
      </div>
    </Wrapper>
  )
}
