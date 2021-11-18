import { Story, Meta } from '@storybook/react'
import ExploreSideBar, { ExploreSidebarProps } from '.'
import items from './mock'

export default {
  title: 'ExploreSideBar',
  component: ExploreSideBar,
  args: {
    items
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ExploreSidebarProps> = (args) => (
  <ExploreSideBar {...args} />
)
export const WithInitialValues: Story<ExploreSidebarProps> = (args) => (
  <ExploreSideBar
    {...args}
    initialValues={{ brinco: true, sort_by: 'low-to-high' }}
  />
)
