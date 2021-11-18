import { Story, Meta } from '@storybook/react'
import CartList, { CartListProps } from '.'
import Mockitems from './mock'

export default {
  title: 'CartList',
  component: CartList,
  args: {
    items: Mockitems,
    total: 'R$ 100,00'
  }
} as Meta

export const Default: Story<CartListProps> = (args) => <CartList {...args} />
