'use client'
import React from 'react'

interface InputFieldProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label: string
  id: string
  as?: 'input' | 'textarea'
}

export const InputField = ({
  label,
  id,
  as: Component = 'input',
  className = '',
  ...props
}: InputFieldProps) => {
  const baseStyles =
    'w-full p-3 rounded-xl border border-white/10 bg-white/5 text-white resize-none placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all'

  return (
    <div className="space-y-2">
      <label htmlFor={id} className="block text-sm font-medium text-white/70 ml-1">
        {label}
      </label>
      <Component
        id={id}
        className={`${baseStyles} ${className} `}
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        {...(props as any)}
      />
    </div>
  )
}
