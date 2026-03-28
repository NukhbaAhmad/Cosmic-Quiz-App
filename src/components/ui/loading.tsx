'use client'
import { useState, useEffect } from 'react'

interface LoaderProps {
  messages?: string[]
  classNames?: string
}

export const Loader = ({ messages, classNames }: LoaderProps) => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!messages || messages.length === 0) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length)
    }, 1000)
    return () => clearInterval(interval)
  }, [messages])

  return (
    <div className={`flex items-center justify-center ${classNames}`}>
      <div className="flex flex-col items-center justify-center">
        <div className="relative flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-blue-500/10 border-t-blue-500 rounded-full animate-spin" />
          <div className="absolute w-4 h-4 bg-blue-400 rounded-full animate-pulse blur-[2px]" />
        </div>

        {messages && messages.length > 0 && (
          <div className="mt-8 text-center px-6 h-6">
            <p
              key={index}
              className="text-blue-300/80 text-sm font-medium tracking-[0.2em] uppercase italic animate-in fade-in slide-in-from-bottom-2 duration-1000"
            >
              {messages[index]}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
