import { Story, Meta } from '@storybook/react'
import ProductCard, { ProductProps } from '.'

export default {
  title: 'ProductCard',
  component: ProductCard,
  args: {
    title: 'Prata colar do sol',
    category: 'Prata zenfira',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235,00',
    promotionalPrice: 'R$ 200',
    ribbon: '20%'
  },
  argTypes: {
    onFav: { action: 'clicked' }
  }
} as Meta

export const Default: Story<ProductProps> = (args) => (
  <div style={{ width: '30rem' }}>
    <ProductCard {...args} />
  </div>
)
