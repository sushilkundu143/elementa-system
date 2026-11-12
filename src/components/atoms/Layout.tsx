import type { ElementType, HTMLAttributes, ReactNode } from 'react'

type LayoutProps = HTMLAttributes<HTMLElement> & {
  as?: ElementType
  children?: ReactNode
}

export function Box({ as: Component = 'div', ...props }: LayoutProps) {
  return <Component {...props} />
}

export function Stack({ as: Component = 'div', className = '', ...props }: LayoutProps) {
  return <Component {...props} className={['elementa-stack', className].filter(Boolean).join(' ')} />
}

export function Inline({ as: Component = 'div', className = '', ...props }: LayoutProps) {
  return <Component {...props} className={['elementa-inline', className].filter(Boolean).join(' ')} />
}

export function Grid({ as: Component = 'div', className = '', ...props }: LayoutProps) {
  return <Component {...props} className={['elementa-grid', className].filter(Boolean).join(' ')} />
}

export function Container({ as: Component = 'div', className = '', ...props }: LayoutProps) {
  return <Component {...props} className={['elementa-container', className].filter(Boolean).join(' ')} />
}
