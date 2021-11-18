import { Story, Meta } from '@storybook/react'
import Highlights, { HighlightProps } from '.'
import item from './mock'

export default {
  title: 'Highlights',
  component: Highlights,
  args: { ...item }
} as Meta

export const Default: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlights {...args} />
  </div>
)

export const WithFloatImage: Story<HighlightProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Highlights {...args} />
  </div>
)

WithFloatImage.args = {
  floatImage: '/img/overflowoman.png'
}
