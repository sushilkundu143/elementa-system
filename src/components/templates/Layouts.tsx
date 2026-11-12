import type { ReactNode } from 'react'
import { Container } from '../atoms/Layout'
import { Breadcrumbs, type BreadcrumbItem } from '../molecules/Content'
import { Header, Sidebar } from '../organisms'
import './layouts.css'

export interface LayoutProps {
  children: ReactNode
  title?: string
}

export function AuthenticationLayout({ children }: LayoutProps) {
  return (
    <main className="elementa-auth-layout">
      <a className="elementa-auth-layout__brand" href="/">elementa</a>
      <section aria-label="Authentication">{children}</section>
    </main>
  )
}

export function DashboardLayout({
  children,
  title = 'Dashboard',
}: LayoutProps) {
  return (
    <div className="elementa-dashboard-layout">
      <Header />
      <div className="elementa-dashboard-layout__body">
        <Sidebar label="Dashboard navigation">
          <nav aria-label="Dashboard">
            <a href="#overview">Overview</a>
            <a href="#activity">Activity</a>
            <a href="#settings">Settings</a>
          </nav>
        </Sidebar>
        <main>
          <Container>
            <h1>{title}</h1>
            {children}
          </Container>
        </main>
      </div>
    </div>
  )
}

export function SettingsLayout({
  children,
  title = 'Settings',
}: LayoutProps) {
  return (
    <main className="elementa-content-layout">
      <Container>
        <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: title }]} />
        <h1>{title}</h1>
        <div className="elementa-settings-layout">
          <nav aria-label="Settings sections">
            <a href="#profile">Profile</a>
            <a href="#security">Security</a>
            <a href="#notifications">Notifications</a>
          </nav>
          <section>{children}</section>
        </div>
      </Container>
    </main>
  )
}

export interface ListDetailLayoutProps extends LayoutProps {
  list: ReactNode
}

export function ListDetailLayout({
  children,
  list,
  title = 'Items',
}: ListDetailLayoutProps) {
  return (
    <main className="elementa-content-layout">
      <Container>
        <h1>{title}</h1>
        <div className="elementa-list-detail-layout">
          <aside aria-label={`${title} list`}>{list}</aside>
          <section aria-label={`${title} details`}>{children}</section>
        </div>
      </Container>
    </main>
  )
}

export interface FormLayoutProps extends LayoutProps {
  description?: string
  breadcrumbs?: BreadcrumbItem[]
}

export function FormLayout({
  children,
  title = 'Complete the form',
  description,
  breadcrumbs,
}: FormLayoutProps) {
  return (
    <main className="elementa-content-layout">
      <Container>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
        <section className="elementa-form-layout">
          <h1>{title}</h1>
          {description && <p>{description}</p>}
          {children}
        </section>
      </Container>
    </main>
  )
}

export function SearchResultsLayout({
  children,
  title = 'Search results',
}: LayoutProps) {
  return (
    <main className="elementa-content-layout">
      <Container>
        <section className="elementa-search-results-layout">
          <h1>{title}</h1>
          {children}
        </section>
      </Container>
    </main>
  )
}
