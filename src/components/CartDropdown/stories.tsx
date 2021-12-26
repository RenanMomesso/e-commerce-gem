import { Story, Meta } from '@storybook/react'
import CartDropdown, { CartDropdownProps } from '.'

import item from 'components/CartList/mock'

export default {
  title: 'Dropdown/CartDropdown',
  component: CartDropdown,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    items: item,
    total: 'R$ 300,00'
  }
} as Meta

export const Default: Story<CartDropdownProps> = (args) => (
  <div style={{ maxWidth: '98%', display: 'flex', justifyContent: 'flex-end' }}>
    <CartDropdown {...args} />
  </div>
)
