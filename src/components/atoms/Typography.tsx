import type { HTMLAttributes, ReactNode } from 'react'
import './catalog.css'

export interface TextProps extends HTMLAttributes<HTMLSpanElement> {
  as?: 'span' | 'p' | 'div' | 'strong' | 'small'
  size?: 'sm' | 'md' | 'lg'
  children: ReactNode
}

export function Text({
  as: Component = 'span',
  className = '',
  size = 'md',
  ...props
}: TextProps) {
  return (
    <Component
      {...props}
      className={['elementa-text', `elementa-text--${size}`, className]
        .filter(Boolean)
        .join(' ')}
    />
  )
}

export interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  children: ReactNode
}

export function Heading({
  as: Component = 'h2',
  className = '',
  ...props
}: HeadingProps) {
  return (
    <Component
      {...props}
      className={['elementa-heading', className].filter(Boolean).join(' ')}
    />
  )
}

export function VisuallyHidden(
  props: HTMLAttributes<HTMLSpanElement>,
) {
  return <span {...props} className={['elementa-visually-hidden', props.className].filter(Boolean).join(' ')} />
}
