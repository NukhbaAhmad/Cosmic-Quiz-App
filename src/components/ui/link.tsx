'use client'

import { Button } from './button'
import Link from 'next/link'

interface LinkProps {
  title: string
  icon: string
  href: string
}
export const LinkButton = ({ title, icon, href }: LinkProps) => (
  <Link href={href} className="flex-1">
    <Button
      variant="secondary"
      className="h-14 text-base w-full flex items-center justify-center gap-3"
    >
      <span className="text-xl">{icon}</span>
      {title}
    </Button>
  </Link>
)
