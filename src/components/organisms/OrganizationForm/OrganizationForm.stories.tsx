import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { OrganizationForm } from './OrganizationForm'

const meta = {
  title: 'Organisms/Organization form',
  component: OrganizationForm,
  tags: ['autodocs'],
  args: {
    onSubmit: fn(),
  },
} satisfies Meta<typeof OrganizationForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
