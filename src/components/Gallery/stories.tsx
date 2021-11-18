import { Story, Meta } from '@storybook/react'
import Gallery from '.'
import items from './mock'

export default {
  title: 'Gallery/Gallery',
  component: Gallery,
  args: {
    items
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: '130rem', margin: 'auto' }}>
    <Gallery {...args} items={items} />
  </div>
)
