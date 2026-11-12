import type { InputHTMLAttributes } from 'react'
import { TextInput } from '../../atoms/TextInput'
import './FormField.css'

export interface FormFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'id'> {
  id: string
  label: string
  hint?: string
  error?: string
}

export function FormField({
  error,
  hint,
  id,
  label,
  ...inputProps
}: FormFieldProps) {
  const describedBy = [
    inputProps['aria-describedby'],
    hint ? `${id}-hint` : undefined,
    error ? `${id}-error` : undefined,
  ]
    .filter(Boolean)
    .join(' ') || undefined

  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        {label}
        {inputProps.required && (
          <span className="form-field__required" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      <TextInput
        {...inputProps}
        id={id}
        aria-describedby={describedBy}
        aria-invalid={error ? true : inputProps['aria-invalid']}
      />
      {hint && (
        <p className="form-field__hint" id={`${id}-hint`}>
          {hint}
        </p>
      )}
      {error && (
        <p
          className="form-field__error"
          id={`${id}-error`}
          role="alert"
          aria-live="polite"
        >
          {error}
        </p>
      )}
    </div>
  )
}
