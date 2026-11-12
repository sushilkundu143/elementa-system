import type { ReactNode } from 'react'
import { SiteHeader } from './SiteHeader'
import './catalog.css'

export { SiteHeader }
export const Header = SiteHeader

export interface NavigationItem {
  label: string
  href: string
  current?: boolean
}

export function NavigationMenu({
  items,
  label = 'Navigation',
}: {
  items: NavigationItem[]
  label?: string
}) {
  return (
    <nav className="elementa-navigation" aria-label={label}>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <a href={item.href} aria-current={item.current ? 'page' : undefined}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export function Sidebar({
  children,
  label = 'Sidebar',
}: {
  children: ReactNode
  label?: string
}) {
  return (
    <aside className="elementa-sidebar" aria-label={label}>
      {children}
    </aside>
  )
}
