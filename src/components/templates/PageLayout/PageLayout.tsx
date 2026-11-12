import type { ReactNode } from 'react'
import { SiteHeader } from '../../organisms/SiteHeader'
import './PageLayout.css'

export interface PageLayoutProps {
  children: ReactNode
}

export function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="page-layout" id="top">
      <div className="page-layout__inner">
        <SiteHeader />
        <main className="page-layout__main">{children}</main>
        <footer className="page-layout__footer">
          <span>Elementa Design System</span>
          <span>Built from small, reusable parts.</span>
        </footer>
      </div>
    </div>
  )
}
