import type { HTMLAttributes, ReactNode } from 'react'
import './catalog.css'

export interface AlertProps extends HTMLAttributes<HTMLDivElement> {
  tone?: 'info' | 'success' | 'warning' | 'danger'
  title?: string
  children: ReactNode
}

export function Alert({
  tone = 'info',
  title,
  children,
  ...props
}: AlertProps) {
  return (
    <div
      {...props}
      className={['elementa-alert', `elementa-alert--${tone}`, props.className]
        .filter(Boolean)
        .join(' ')}
      role={tone === 'danger' ? 'alert' : 'status'}
    >
      {title && <strong>{title}</strong>}
      <div>{children}</div>
    </div>
  )
}

export interface BreadcrumbItem {
  label: string
  href?: string
}

export function Breadcrumbs({
  items,
  label = 'Breadcrumb',
}: {
  items: BreadcrumbItem[]
  label?: string
}) {
  return (
    <nav aria-label={label} className="elementa-breadcrumbs">
      <ol>
        {items.map((item, index) => {
          const current = index === items.length - 1
          return (
            <li key={`${item.label}-${index}`}>
              {item.href && !current ? (
                <a href={item.href}>{item.label}</a>
              ) : (
                <span aria-current={current ? 'page' : undefined}>{item.label}</span>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
}: {
  page: number
  pageCount: number
  onPageChange: (page: number) => void
}) {
  const count = Math.max(1, Math.floor(pageCount))
  const current = Math.min(Math.max(1, Math.floor(page)), count)
  return (
    <nav className="elementa-pagination" aria-label="Pagination">
      <button type="button" disabled={current <= 1} onClick={() => onPageChange(current - 1)}>
        Previous
      </button>
      <span aria-live="polite">Page {current} of {count}</span>
      <button type="button" disabled={current >= count} onClick={() => onPageChange(current + 1)}>
        Next
      </button>
    </nav>
  )
}

export function Card({
  children,
  title,
  className = '',
  ...props
}: HTMLAttributes<HTMLElement> & { title?: string; children: ReactNode }) {
  return (
    <article
      {...props}
      className={['elementa-card', className].filter(Boolean).join(' ')}
    >
      {title && <h2>{title}</h2>}
      {children}
    </article>
  )
}

export function ListItem({
  children,
  leading,
  trailing,
  ...props
}: HTMLAttributes<HTMLLIElement> & {
  leading?: ReactNode
  trailing?: ReactNode
  children: ReactNode
}) {
  return (
    <li {...props} className={['elementa-list-item', props.className].filter(Boolean).join(' ')}>
      {leading && <span>{leading}</span>}
      <span>{children}</span>
      {trailing && <span>{trailing}</span>}
    </li>
  )
}

export function EmptyState({
  title,
  description,
  action,
}: {
  title: string
  description: string
  action?: ReactNode
}) {
  return (
    <section className="elementa-empty-state" aria-labelledby="elementa-empty-title">
      <h2 id="elementa-empty-title">{title}</h2>
      <p>{description}</p>
      {action}
    </section>
  )
}

export function Tooltip({
  content,
  children,
}: {
  content: string
  children: ReactNode
}) {
  return (
    <span className="elementa-tooltip" title={content}>
      {children}
    </span>
  )
}
