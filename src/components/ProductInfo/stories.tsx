import { Story, Meta } from '@storybook/react'
import ProductInfo, { ProductInfoProps } from '.'
import ProductInfoMock from './mock'

export default {
  title: 'Product/ProductInfo',
  component: ProductInfo,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: ProductInfoMock
} as Meta

export const Default: Story<ProductInfoProps> = (args) => (
  <div style={{ maxWidth: '144rem', padding: '1.5rem' }}>
    <ProductInfo {...args} />
  </div>
)
