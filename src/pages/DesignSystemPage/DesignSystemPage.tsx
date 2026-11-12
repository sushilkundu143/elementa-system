import { useState } from 'react'
import {
  Badge,
  Button,
  FormField,
  OrganizationForm,
  PageLayout,
} from '../../components'
import './DesignSystemPage.css'

const colorTokens = [
  { name: 'Canvas', token: '--color-canvas', color: 'var(--color-canvas)' },
  { name: 'Brand', token: '--color-brand', color: 'var(--color-brand)' },
  { name: 'Text', token: '--color-text', color: 'var(--color-text)' },
  { name: 'Success', token: '--color-success', color: 'var(--color-success)' },
]

export function DesignSystemPage() {
  const [createdOrganization, setCreatedOrganization] = useState('')

  return (
    <PageLayout>
      <section className="showcase-hero" aria-labelledby="page-title">
        <div className="showcase-hero__copy">
          <p className="showcase-hero__eyebrow">A component-first design system</p>
          <h1 id="page-title">Build small. Compose beautifully.</h1>
          <p className="showcase-hero__description">
            Elementa is a thoughtful starting point for creating consistent
            digital experiences, one reusable component at a time.
          </p>
        </div>
        <aside className="showcase-hero__note">
          <strong>Start at the smallest useful layer</strong>
          <p>
            Begin with shared foundations and atoms, then compose them into
            focused controls, page regions, and complete experiences.
          </p>
        </aside>
      </section>

      <section
        className="showcase-section"
        id="foundations"
        aria-labelledby="foundations-title"
      >
        <div className="showcase-section__heading">
          <div>
            <p className="showcase-section__eyebrow">01 / Foundations</p>
            <h2 id="foundations-title">A shared visual language</h2>
          </div>
          <p>
            Foundations turn design decisions into reusable tokens. Update
            these values in one place to evolve the system.
          </p>
        </div>
        <div className="token-grid">
          {colorTokens.map(({ color, name, token }) => (
            <div className="token-card" key={token}>
              <div
                className="token-card__swatch"
                style={{ backgroundColor: color }}
                aria-hidden="true"
              />
              <strong>{name}</strong>
              <code>{token}</code>
            </div>
          ))}
        </div>
      </section>

      <section
        className="showcase-section"
        id="components"
        aria-labelledby="components-title"
      >
        <div className="showcase-section__heading">
          <div>
            <p className="showcase-section__eyebrow">02 / Components</p>
            <h2 id="components-title">Primitives that work together</h2>
          </div>
          <p>
            These example atoms and molecules demonstrate a consistent API,
            token usage, and accessible behavior.
          </p>
        </div>
        <div className="component-grid">
          <article className="component-card">
            <h3 className="component-card__heading">Atoms / Button</h3>
            <div className="component-card__row">
              <Button>Primary action</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="tertiary">Tertiary</Button>
            </div>
          </article>
          <article className="component-card">
            <h3 className="component-card__heading">Atoms / Badge</h3>
            <div className="component-card__row">
              <Badge tone="brand">New</Badge>
              <Badge tone="success">Complete</Badge>
              <Badge tone="warning">Review</Badge>
              <Badge tone="danger">Action needed</Badge>
            </div>
          </article>
          <article className="component-card component-card--wide">
            <h3 className="component-card__heading">Molecules / Form field</h3>
            <div className="component-card__stack">
              <FormField
                id="sample-email"
                label="Email address"
                type="email"
                placeholder="you@example.com"
                hint="A label, input, and helper text composed into one control."
              />
            </div>
          </article>
          <article className="component-card component-card--wide">
            <h3 className="component-card__heading">
              Organisms / Organization form
            </h3>
            <OrganizationForm onSubmit={setCreatedOrganization} />
            {createdOrganization && (
              <p className="organization-success" role="status">
                Organization created: {createdOrganization}
              </p>
            )}
          </article>
        </div>
      </section>

      <section className="showcase-principles" aria-label="Design principles">
        <article className="showcase-principle">
          <h3>Composable</h3>
          <p>Each layer builds on the one below it instead of duplicating UI.</p>
        </article>
        <article className="showcase-principle">
          <h3>Accessible</h3>
          <p>Semantic HTML, visible focus, and clear form feedback come first.</p>
        </article>
        <article className="showcase-principle">
          <h3>Documented</h3>
          <p>Storybook keeps component states easy to explore and review.</p>
        </article>
      </section>
    </PageLayout>
  )
}
