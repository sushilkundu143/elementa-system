import { useId, useState, type FormEvent } from 'react'
import { Button } from '../../atoms/Button'
import { FormField } from '../../molecules/FormField'
import './OrganizationForm.css'

export interface OrganizationFormProps {
  onSubmit: (organizationName: string) => void
  submitLabel?: string
}

export function OrganizationForm({
  onSubmit,
  submitLabel = 'Create organization',
}: OrganizationFormProps) {
  const inputId = useId()
  const [organizationName, setOrganizationName] = useState('')
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const trimmedName = organizationName.trim()
    if (!trimmedName) {
      setError('Enter an organization name.')
      return
    }

    setError('')
    onSubmit(trimmedName)
  }

  return (
    <form className="organization-form" onSubmit={handleSubmit} noValidate>
      <FormField
        id={inputId}
        label="Organization name"
        name="organizationName"
        value={organizationName}
        onChange={(event) => {
          setOrganizationName(event.target.value)
          if (error) setError('')
        }}
        placeholder="e.g. Acme Studio"
        autoComplete="organization"
        required
        error={error}
      />
      <Button type="submit">{submitLabel}</Button>
    </form>
  )
}
