import { useState } from 'react'
import {
  Alert,
  Button,
  Card,
  CheckboxField,
  DataTable,
  EmptyState,
  Form,
  FormActions,
  FormField,
  Heading,
  Pagination,
  SearchField,
  SettingsLayout,
  Switch,
  TextField,
} from '../components'
import { AuthenticationLayout } from '../components/templates/Layouts'

export function LoginPageExample() {
  const [submitted, setSubmitted] = useState(false)
  return (
    <AuthenticationLayout>
      <Heading as="h1">Welcome back</Heading>
      <Form onSubmit={() => setSubmitted(true)}>
        <TextField id="login-email" label="Email address" type="email" required />
        <FormField
          id="login-password"
          label="Password"
          type="password"
          autoComplete="current-password"
          required
        />
        <FormActions>
          <Button type="submit">Sign in</Button>
        </FormActions>
      </Form>
      {submitted && <Alert tone="success">Sign-in form submitted.</Alert>}
    </AuthenticationLayout>
  )
}

interface Activity {
  id: number
  item: string
  status: string
}

const activities: Activity[] = [
  { id: 1, item: 'Design review', status: 'Complete' },
  { id: 2, item: 'Component inventory', status: 'In progress' },
]

export function DashboardPageExample() {
  return (
    <section className="elementa-example-page">
      <Heading as="h1">Dashboard</Heading>
      <Card title="Recent activity">
        <DataTable
          caption="Recent project activity"
          columns={[
            { key: 'item', header: 'Item' },
            { key: 'status', header: 'Status' },
          ]}
          rows={activities}
          rowKey="id"
        />
      </Card>
    </section>
  )
}

export function SettingsPageExample() {
  const [saved, setSaved] = useState(false)
  return (
    <SettingsLayout title="Settings">
      <Form onSubmit={() => setSaved(true)} submitLabel="Save settings">
        <TextField id="settings-name" label="Display name" defaultValue="Alex Morgan" />
        <CheckboxField label="Send me product updates" defaultChecked />
        <Switch label="Enable two-step verification" />
        {saved && <Alert tone="success">Your settings were saved.</Alert>}
      </Form>
    </SettingsLayout>
  )
}

export function SearchResultsPageExample() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)

  return (
    <section className="elementa-example-page">
      <Heading as="h1">Search results</Heading>
      <SearchField label="Search projects" onSearch={setQuery} />
      {query ? (
        <p aria-live="polite">Showing results for “{query}”.</p>
      ) : (
        <EmptyState
          title="Start a search"
          description="Enter a search term to find a project."
        />
      )}
      <Pagination page={page} pageCount={3} onPageChange={setPage} />
    </section>
  )
}
