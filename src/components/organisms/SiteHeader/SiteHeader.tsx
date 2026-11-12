import '../../atoms/Button/Button.css'
import './SiteHeader.css'

export function SiteHeader() {
  return (
    <header className="site-header">
      <a className="site-header__brand" href="#top" aria-label="Elementa home">
        <span className="site-header__mark" aria-hidden="true">
          e
        </span>
        <span>elementa</span>
      </a>
      <nav className="site-header__nav" aria-label="Main navigation">
        <a href="#foundations">Foundations</a>
        <a href="#components">Components</a>
        <a
          className="button button--secondary button--small"
          href="https://storybook.js.org/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Learn about Storybook (opens in a new tab)"
        >
          Storybook
        </a>
      </nav>
    </header>
  )
}
