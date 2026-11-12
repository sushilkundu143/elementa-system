import type { InputHTMLAttributes } from 'react'
import './TextInput.css'

export type TextInputProps = InputHTMLAttributes<HTMLInputElement>

export function TextInput({ className = '', ...props }: TextInputProps) {
  const classes = ['text-input', className].filter(Boolean).join(' ')

  return <input {...props} className={classes} />
}
