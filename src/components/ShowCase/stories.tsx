import { Story, Meta } from '@storybook/react'
import ShowCase, { ShowCaseProps } from '.'
import HighlightsMock from 'components/Highlights/mock'
import ProductCardMock from 'components/ProductCardSlider/mock'

export default {
  title: 'ShowCase',
  component: ShowCase,
  decorators: [
    (Story) => (
      <div style={{ margin: '0 auto' }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<ShowCaseProps> = (args) => <ShowCase {...args} />

Default.args = {
  title: 'Mais Populares',
  highlight: HighlightsMock,
  products: ProductCardMock
}
