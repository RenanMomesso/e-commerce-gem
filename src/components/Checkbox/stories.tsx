import { Story, Meta } from '@storybook/react'
import Checkbox, { CheckBoxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'Checked ' }
  },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CheckBoxProps> = (args) => (
  <>
    <div style={{ padding: 10 }}>
      <Checkbox isChecked label="Price" labelFor="price" {...args} />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="color" labelFor="blue" />
    </div>
    <div style={{ padding: 10 }}>
      <Checkbox {...args} label="category" labelColor="white" />
    </div>
  </>
)

Default.args = {
  label: 'Price',
  labelFor: 'CheckPrice'
}
