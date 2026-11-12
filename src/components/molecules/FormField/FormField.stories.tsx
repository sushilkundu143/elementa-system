import type { Meta, StoryObj } from '@storybook/react-vite'
import { FormField } from './FormField'

const meta = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
  args: {
    id: 'email',
    label: 'Email address',
    type: 'email',
    placeholder: 'you@example.com',
  },
} satisfies Meta<typeof FormField>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { hint: 'We will only use this to contact you about your account.' },
}

export const Invalid: Story = {
  args: {
    defaultValue: 'not-an-email',
    error: 'Enter an email address in the format name@example.com.',
  },
}
