import { Story, Meta } from '@storybook/react'
import FormSignup from '.'

export default {
  title: 'FormSignup',
  component: FormSignup
} as Meta

export const Default: Story = (ags) => (
  <div style={{ width: '300px', margin: 'auto' }}>
    <FormSignup {...ags} />
  </div>
)
