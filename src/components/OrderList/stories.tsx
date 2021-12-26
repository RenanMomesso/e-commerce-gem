import { Story, Meta } from '@storybook/react'
import OrderList, { OrdersListProps } from '.'

import itemsMock from './mock'

export default {
  title: 'Profile/OrderList',
  component: OrderList,
  args: {
    items: itemsMock
  }
} as Meta

export const Default: Story<OrdersListProps> = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <OrderList {...args} />
  </div>
)
