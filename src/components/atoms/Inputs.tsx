import type {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from 'react'
import { TextInput } from './TextInput'
import './catalog.css'

export { TextInput as Input }
export type { TextInputProps as InputProps } from './TextInput'

export type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement>

export function Textarea({ className = '', ...props }: TextareaProps) {
  return (
    <textarea
      {...props}
      className={['elementa-textarea', className].filter(Boolean).join(' ')}
    />
  )
}

export type CheckboxProps = InputHTMLAttributes<HTMLInputElement>

export function Checkbox(props: CheckboxProps) {
  return <input {...props} type="checkbox" className={['elementa-check', props.className].filter(Boolean).join(' ')} />
}

export type RadioProps = InputHTMLAttributes<HTMLInputElement>

export function Radio(props: RadioProps) {
  return <input {...props} type="radio" className={['elementa-check', props.className].filter(Boolean).join(' ')} />
}

export interface SwitchProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export function Switch({ label, className = '', ...props }: SwitchProps) {
  return (
    <label className={['elementa-switch', className].filter(Boolean).join(' ')}>
      <input {...props} type="checkbox" role="switch" />
      <span className="elementa-switch__track" aria-hidden="true" />
      <span>{label}</span>
    </label>
  )
}

export type NativeSelectProps = SelectHTMLAttributes<HTMLSelectElement>

export function NativeSelect({ className = '', ...props }: NativeSelectProps) {
  return (
    <select
      {...props}
      className={['elementa-native-select', className].filter(Boolean).join(' ')}
    />
  )
}
