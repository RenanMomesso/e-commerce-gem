import { Story, Meta } from '@storybook/react'
import BannerSlider from '.'
import items from './mock'

export default {
  title: 'BannerSlider',
  component: BannerSlider,
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
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <BannerSlider {...{ items }} {...args} />
  </div>
)
