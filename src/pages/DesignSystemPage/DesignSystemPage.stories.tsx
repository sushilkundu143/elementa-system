import type { Meta, StoryObj } from '@storybook/react-vite'
import { DesignSystemPage } from './DesignSystemPage'

const meta = {
  title: 'Pages/Design system showcase',
  component: DesignSystemPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof DesignSystemPage>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
