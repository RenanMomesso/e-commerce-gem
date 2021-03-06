import { Story, Meta } from '@storybook/react'
import CartIcon from '.'

export default {
  title: 'CartIcon',
  component: CartIcon,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story = (args) => <CartIcon {...args} />

export const WithBadge: Story = (args) => <CartIcon {...args} />

WithBadge.args = {
  quantity: 3
}
