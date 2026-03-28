'use client'
import React from 'react'
import { Button } from '../button'

interface EmptyStateProps {
  title?: string
  message?: string
  icon?: React.ReactNode | string
  actionLabel?: string
  onAction?: () => void
  className?: string
}

export const EmptyState = ({
  title = 'No Data Found',
  message = "Oops, There's nothing to show here right now.",
  icon = '📂',
  actionLabel,
  onAction,
  className = '',
}: EmptyStateProps) => {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-4 text-center animate-in fade-in zoom-in-95 duration-500 ${className}`}
    >
      <div className="text-6xl mb-6 drop-shadow-lg">{icon}</div>

      {/* Text Area */}
      <h3 className="text-2xl font-bold text-white mb-2 italic">{title}</h3>
      <p className="text-white/50 max-w-sm mb-8 leading-relaxed">{message}</p>

      {/* Optional */}
      {onAction && actionLabel && (
        <Button variant="outline" onClick={onAction} className="max-w-[200px]">
          {actionLabel}
        </Button>
      )}
    </div>
  )
}
