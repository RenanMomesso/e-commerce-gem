import { Story, Meta } from '@storybook/react'
import PaymentOptionsMock from 'components/PaymentOptions/mock'
import CardList from '.'

export default {
  title: 'Profile/CardList',
  component: CardList,
  args: {
    cards: PaymentOptionsMock
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 850, margin: 'auto' }}>
    <CardList {...args} />
  </div>
)
