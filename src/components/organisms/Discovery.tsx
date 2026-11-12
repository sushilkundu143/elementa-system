import { useId, type ReactNode } from 'react'
import './catalog.css'

export function FilterPanel({
  title = 'Filters',
  children,
  onReset,
}: {
  title?: string
  children: ReactNode
  onReset?: () => void
}) {
  return (
    <section className="elementa-filter-panel" aria-label={title}>
      <header>
        <h2>{title}</h2>
        {onReset && <button type="button" onClick={onReset}>Clear filters</button>}
      </header>
      <div>{children}</div>
    </section>
  )
}

export interface FileUploadProps {
  label: string
  accept?: string
  multiple?: boolean
  onFilesSelected?: (files: FileList | null) => void
}

export function FileUpload({
  label,
  accept,
  multiple = false,
  onFilesSelected,
}: FileUploadProps) {
  const id = useId()
  return (
    <div className="elementa-discovery-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="file"
        accept={accept}
        multiple={multiple}
        onChange={(event) => onFilesSelected?.(event.currentTarget.files)}
      />
    </div>
  )
}

export function DatePicker({
  label,
  value,
  onChange,
  min,
  max,
}: {
  label: string
  value?: string
  onChange?: (value: string) => void
  min?: string
  max?: string
}) {
  const id = useId()
  return (
    <div className="elementa-discovery-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type="date"
        value={value}
        min={min}
        max={max}
        onChange={(event) => onChange?.(event.currentTarget.value)}
      />
    </div>
  )
}

export function Combobox({
  label,
  options,
  value,
  onChange,
  placeholder,
}: {
  label: string
  options: string[]
  value?: string
  onChange?: (value: string) => void
  placeholder?: string
}) {
  const id = useId()
  const listId = useId()
  return (
    <div className="elementa-discovery-field">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        className="elementa-combobox"
        role="combobox"
        aria-autocomplete="list"
        aria-controls={listId}
        list={listId}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange?.(event.currentTarget.value)}
      />
      <datalist id={listId}>
        {options.map((option) => <option key={option} value={option} />)}
      </datalist>
    </div>
  )
}
