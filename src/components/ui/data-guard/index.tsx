'use client'
import React from 'react'
import { EmptyState } from './empty-state'

interface DataGuardProps {
  isEmpty: boolean
  emptyConfig?: {
    title?: string
    message?: string
    icon?: string
  }
  children: React.ReactNode
}

export const DataGuard = ({ isEmpty, emptyConfig, children }: DataGuardProps) => {
  if (isEmpty) {
    return (
      <EmptyState
        title={emptyConfig?.title}
        message={emptyConfig?.message}
        icon={emptyConfig?.icon}
      />
    )
  }

  return <>{children}</>
}
