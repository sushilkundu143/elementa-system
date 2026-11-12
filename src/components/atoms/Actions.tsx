import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from 'react'
import { Button, type ButtonProps } from './Button'
import './catalog.css'

export { Button }
export type { ButtonProps }

export interface IconButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
  icon: ReactNode
  label: string
}

export function IconButton({ icon, label, ...props }: IconButtonProps) {
  return (
    <button {...props} className="elementa-icon-button" aria-label={label} type={props.type ?? 'button'}>
      <span aria-hidden="true">{icon}</span>
    </button>
  )
}

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export function Link({ className = '', ...props }: LinkProps) {
  return (
    <a
      {...props}
      className={['elementa-link', className].filter(Boolean).join(' ')}
    />
  )
}
