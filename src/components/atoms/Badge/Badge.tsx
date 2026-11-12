import type { HTMLAttributes } from 'react'
import './Badge.css'

export type BadgeTone = 'neutral' | 'brand' | 'success' | 'warning' | 'danger'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone
}

export function Badge({
  children,
  className = '',
  tone = 'neutral',
  ...props
}: BadgeProps) {
  const classes = ['badge', `badge--${tone}`, className]
    .filter(Boolean)
    .join(' ')

  return (
    <span {...props} className={classes}>
      {children}
    </span>
  )
}
