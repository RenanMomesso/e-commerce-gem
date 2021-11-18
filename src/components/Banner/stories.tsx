import { Story, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'
export default {
  title: 'Banner',
  component: Banner,
  args: {
    img: 'https://unsplash.com/photos/SYTO3xs06fU',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
    <Banner {...args} />
  </div>
)

export const WithRibon: Story<BannerProps> = (args) => (
  <div style={{ maxWidth: '104rem' }}>
    <Banner {...args} />
  </div>
)

WithRibon.args = {
  ribbon: '20% OFF',
  ribbonSizes: 'normal',
  ribbonColor: 'primary'
}
