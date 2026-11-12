import type { Meta, StoryObj } from '@storybook/react-vite'
import {
  DashboardPageExample,
  LoginPageExample,
  SearchResultsPageExample,
  SettingsPageExample,
} from './examples'

const meta = {
  title: 'Pages/Examples',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const Login: Story = {
  render: () => <LoginPageExample />,
}

export const Dashboard: Story = {
  render: () => <DashboardPageExample />,
}

export const Settings: Story = {
  render: () => <SettingsPageExample />,
}

export const SearchResults: Story = {
  render: () => <SearchResultsPageExample />,
}
