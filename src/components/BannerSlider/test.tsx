import { screen } from '@testing-library/react'
import 'match-media-mock'
import items from './mock'

import BannerSlider from '.'
import { renderWithTheme } from 'utils/helper'

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })
  it('should render with 1 active', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(3)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
    expect(
      screen.getByRole('heading', {
        name: /Valorize quem você ama/i,
        hidden: false
      })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', {
        name: /Valorize quem você ama/i,
        hidden: true
      })
    ).toBeInTheDocument()
  })
})
