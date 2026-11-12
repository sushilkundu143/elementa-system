import type { FormEvent, ReactNode } from 'react'
import { Button } from '../atoms/Button'

export interface FormProps {
  children: ReactNode
  onSubmit: (event: FormEvent<HTMLFormElement>) => void
  submitLabel?: string
  className?: string
}

export function Form({
  children,
  onSubmit,
  submitLabel,
  className = '',
}: FormProps) {
  return (
    <form
      className={['elementa-form', className].filter(Boolean).join(' ')}
      onSubmit={(event) => {
        event.preventDefault()
        onSubmit(event)
      }}
    >
      {children}
      {submitLabel && <Button type="submit">{submitLabel}</Button>}
    </form>
  )
}

export interface DataTableColumn<Row> {
  key: keyof Row
  header: string
  render?: (value: Row[keyof Row], row: Row) => ReactNode
}

export function DataTable<Row extends object>({
  columns,
  rows,
  rowKey,
  caption,
}: {
  columns: DataTableColumn<Row>[]
  rows: Row[]
  rowKey: keyof Row
  caption: string
}) {
  return (
    <div className="elementa-table-scroll">
      <table className="elementa-table">
        <caption>{caption}</caption>
        <thead>
          <tr>{columns.map((column) => <th key={String(column.key)} scope="col">{column.header}</th>)}</tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={String(row[rowKey])}>
              {columns.map((column) => {
                const value = row[column.key]
                return (
                  <td key={String(column.key)}>
                    {column.render ? column.render(value, row) : String(value ?? '')}
                  </td>
                )
              })}
            </tr>
          ))}
          {rows.length === 0 && (
            <tr><td colSpan={columns.length}>No records found.</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
