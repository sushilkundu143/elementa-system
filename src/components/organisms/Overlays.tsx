import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from 'react'
import { Button } from '../atoms/Button'
import './catalog.css'

export interface DialogProps {
  open: boolean
  title: string
  onDismiss: () => void
  children: ReactNode
  className?: string
}

export function Dialog({
  open,
  title,
  onDismiss,
  children,
  className = '',
}: DialogProps) {
  const ref = useRef<HTMLDialogElement>(null)
  const titleId = useId()

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (open && !dialog.open) dialog.showModal()
    if (!open && dialog.open) dialog.close()
  }, [open])

  return (
    <dialog
      ref={ref}
      className={['elementa-dialog', className].filter(Boolean).join(' ')}
      aria-labelledby={titleId}
      onClose={onDismiss}
    >
      <div className="elementa-dialog__header">
        <h2 id={titleId}>{title}</h2>
        <Button type="button" variant="tertiary" onClick={onDismiss}>
          Close
        </Button>
      </div>
      <div>{children}</div>
    </dialog>
  )
}

export function Drawer(props: DialogProps) {
  return <Dialog {...props} className={['elementa-drawer', props.className].filter(Boolean).join(' ')} />
}

export interface TabItem {
  id: string
  label: string
  content: ReactNode
}

export function Tabs({
  items,
  label = 'Content tabs',
}: {
  items: TabItem[]
  label?: string
}) {
  const instanceId = useId()
  const [selected, setSelected] = useState(items[0]?.id ?? '')
  const selectedTab = items.find((item) => item.id === selected) ?? items[0]

  function moveFocus(event: KeyboardEvent<HTMLDivElement>) {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return
    event.preventDefault()
    const currentIndex = items.findIndex((item) => item.id === selected)
    const nextIndex =
      event.key === 'Home'
        ? 0
        : event.key === 'End'
          ? items.length - 1
          : (currentIndex + (event.key === 'ArrowRight' ? 1 : -1) + items.length) %
            items.length
    const next = items[nextIndex]
    if (next) {
      setSelected(next.id)
          document.getElementById(`${instanceId}-tab-${next.id}`)?.focus()
    }
  }

  return (
    <section className="elementa-tabs">
      <div role="tablist" aria-label={label} onKeyDown={moveFocus}>
        {items.map((item) => (
          <button
            key={item.id}
            id={`${instanceId}-tab-${item.id}`}
            type="button"
            role="tab"
            aria-selected={selected === item.id}
            aria-controls={`${instanceId}-panel-${item.id}`}
            tabIndex={selected === item.id ? 0 : -1}
            onClick={() => setSelected(item.id)}
          >
            {item.label}
          </button>
        ))}
      </div>
      {selectedTab && (
        <div
          id={`${instanceId}-panel-${selectedTab.id}`}
          role="tabpanel"
          aria-labelledby={`${instanceId}-tab-${selectedTab.id}`}
          tabIndex={0}
        >
          {selectedTab.content}
        </div>
      )}
    </section>
  )
}

export function Accordion({
  items,
  allowMultiple = false,
}: {
  items: Array<{ title: string; content: ReactNode }>
  allowMultiple?: boolean
}) {
  return (
    <div className="elementa-accordion">
      {items.map((item) => (
        <details key={item.title} name={allowMultiple ? undefined : 'elementa-accordion'}>
          <summary>{item.title}</summary>
          <div>{item.content}</div>
        </details>
      ))}
    </div>
  )
}

export function ToastRegion({
  message,
  tone = 'info',
}: {
  message?: string
  tone?: 'info' | 'success' | 'warning' | 'danger'
}) {
  return (
    <div
      className={`elementa-toast-region elementa-toast-region--${tone}`}
      role={tone === 'danger' ? 'alert' : 'status'}
      aria-live={tone === 'danger' ? 'assertive' : 'polite'}
    >
      {message}
    </div>
  )
}
