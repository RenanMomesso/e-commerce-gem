import { Story, Meta } from '@storybook/react'
import ProductItem, { ProductItemProps } from '.'

export default {
  title: 'ProductItem',
  component: ProductItem,
  args: {
    img: 'https://source.unsplash.com/user/willianjusten/151x70',
    title: 'Product Colar',
    price: 'R$ 215,00'
  }
} as Meta

export const Default: Story<ProductItemProps> = (args) => (
  <ProductItem {...args} />
)

export const WithPayment: Story<ProductItemProps> = (args) => (
  <ProductItem {...args} />
)

WithPayment.args = {
  downloadLink: '/',
  paymentInfo: {
    flag: 'mastercard',
    img: 'mastercard',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/02/2020 at 20:32'
  }
}
