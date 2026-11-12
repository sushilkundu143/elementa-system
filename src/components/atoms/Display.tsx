import type { HTMLAttributes, ReactNode } from 'react'
import { Badge as ExistingBadge, type BadgeProps } from './Badge'
import './catalog.css'

export { ExistingBadge as Badge }
export type { BadgeProps }

export interface IconProps extends HTMLAttributes<HTMLSpanElement> {
  label?: string
  children: ReactNode
}

export function Icon({ label, children, ...props }: IconProps) {
  return (
    <span
      {...props}
      role={label ? 'img' : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
    >
      {children}
    </span>
  )
}

export interface AvatarProps extends HTMLAttributes<HTMLSpanElement> {
  name: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Avatar({
  name,
  src,
  size = 'md',
  className = '',
  ...props
}: AvatarProps) {
  const initials = name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
  return (
    <span
      {...props}
      className={['elementa-avatar', `elementa-avatar--${size}`, className]
        .filter(Boolean)
        .join(' ')}
      role="img"
      aria-label={name}
    >
      {src ? <img src={src} alt="" /> : initials || '?'}
    </span>
  )
}

export function Spinner({
  label = 'Loading',
}: {
  label?: string
}) {
  return (
    <span className="elementa-spinner" role="status" aria-label={label}>
      <span aria-hidden="true" />
    </span>
  )
}

export interface SkeletonProps extends HTMLAttributes<HTMLSpanElement> {
  width?: string | number
  height?: string | number
  label?: string
}

export function Skeleton({
  width = '100%',
  height = '1em',
  label = 'Loading content',
  style,
  ...props
}: SkeletonProps) {
  return (
    <span
      {...props}
      className={['elementa-skeleton', props.className].filter(Boolean).join(' ')}
      style={{ width, height, ...style }}
      role="status"
      aria-label={label}
    />
  )
}

export function Divider({
  orientation = 'horizontal',
  ...props
}: HTMLAttributes<HTMLHRElement> & {
  orientation?: 'horizontal' | 'vertical'
}) {
  return (
    <hr
      {...props}
      className={[
        'elementa-divider',
        `elementa-divider--${orientation}`,
        props.className,
      ]
        .filter(Boolean)
        .join(' ')}
      aria-orientation={orientation}
    />
  )
}

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  value: number
  max?: number
  label: string
}

export function Progress({ value, max = 100, label, ...props }: ProgressProps) {
  const safeMax = max > 0 ? max : 100
  const safeValue = Math.min(Math.max(value, 0), safeMax)
  return (
    <div {...props}>
      <label className="elementa-progress__label">
        <span>{label}</span>
        <progress value={safeValue} max={safeMax}>
          {Math.round((safeValue / safeMax) * 100)}%
        </progress>
      </label>
    </div>
  )
}

export type DisplayContentProps = { children: ReactNode }
