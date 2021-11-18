import { Story, Meta } from '@storybook/react'
import ProductDetails, { ProductDetailsProps } from '.'

export default {
  title: 'Product/ProductDetails',
  component: ProductDetails,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    platforms: ['windows', 'linux', 'mac']
  },
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    }
  }
} as Meta

export const Default: Story<ProductDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <ProductDetails {...args} />
  </div>
)
