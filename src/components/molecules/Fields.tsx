import { useId, type FormEvent, type ReactNode } from 'react'
import type { InputHTMLAttributes, SelectHTMLAttributes } from 'react'
import { Checkbox, NativeSelect, Radio, TextInput } from '../atoms'
import { FormField, type FormFieldProps } from './FormField/FormField'
import './catalog.css'

export { FormField }
export type TextFieldProps = FormFieldProps
export const TextField = FormField

export interface FieldOption {
  label: string
  value: string
  disabled?: boolean
}

export interface SelectFieldProps
  extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'id'> {
  id: string
  label: string
  options: FieldOption[]
  placeholder?: string
  hint?: string
  error?: string
}

export function SelectField({
  id,
  label,
  options,
  placeholder,
  hint,
  error,
  ...props
}: SelectFieldProps) {
  const describedBy = [hint && `${id}-hint`, error && `${id}-error`]
    .filter(Boolean)
    .join(' ') || undefined

  return (
    <div className="elementa-field">
      <label htmlFor={id}>{label}</label>
      <NativeSelect
        {...props}
        id={id}
        aria-describedby={describedBy}
        aria-invalid={error ? true : props['aria-invalid']}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </NativeSelect>
      {hint && <small id={`${id}-hint`}>{hint}</small>}
      {error && <small id={`${id}-error`} role="alert">{error}</small>}
    </div>
  )
}

export interface CheckboxFieldProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
}

export function CheckboxField({ label, ...props }: CheckboxFieldProps) {
  return (
    <label className="elementa-choice">
      <Checkbox {...props} />
      <span>{label}</span>
    </label>
  )
}

export interface RadioGroupProps {
  name: string
  legend: string
  options: FieldOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
}

export function RadioGroup({
  name,
  legend,
  options,
  value,
  defaultValue,
  onChange,
}: RadioGroupProps) {
  return (
    <fieldset className="elementa-radio-group">
      <legend>{legend}</legend>
      {options.map((option) => (
        <label className="elementa-choice" key={option.value}>
          <Radio
            name={name}
            value={option.value}
            checked={value === undefined ? undefined : value === option.value}
            defaultChecked={defaultValue === option.value}
            disabled={option.disabled}
            onChange={(event) => onChange?.(event.currentTarget.value)}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </fieldset>
  )
}

export interface SearchFieldProps {
  label: string
  onSearch: (query: string) => void
  placeholder?: string
}

export function SearchField({
  label,
  onSearch,
  placeholder = 'Search',
}: SearchFieldProps) {
  const id = useId()
  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    onSearch(String(data.get('query') ?? '').trim())
  }
  return (
    <form className="elementa-search-field" role="search" onSubmit={submit}>
      <label htmlFor={id}>{label}</label>
      <div className="elementa-search-field__controls">
        <TextInput id={id} name="query" type="search" placeholder={placeholder} />
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export type PasswordFieldProps = Omit<FormFieldProps, 'type'>

export function PasswordField(props: PasswordFieldProps) {
  return <FormField {...props} type="password" autoComplete={props.autoComplete ?? 'current-password'} />
}

export function InputGroup({
  children,
  label,
}: {
  children: ReactNode
  label?: string
}) {
  return (
    <div className="elementa-input-group" role="group" aria-label={label}>
      {children}
    </div>
  )
}

export function FormActions({
  children,
  className = '',
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={['elementa-form-actions', className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
