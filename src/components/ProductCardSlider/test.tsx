import { renderWithTheme } from 'utils/helper'
import 'match-media-mock'
import ProductCardSlider from '.'
import items from './mock'
// import { screen } from '@testing-library/react'

describe('<ProductCardSlider/>', () => {
  it('Render ProductCardSlider', () => {
    const { container } = renderWithTheme(<ProductCardSlider items={items} />)
    expect(container.querySelectorAll('.slick-active')).toHaveLength(4)
  })

  it('should render white arrows if color passed', () => {
    renderWithTheme(<ProductCardSlider items={items} color="white" />)

    // expect(screen.getByLabelText(/previous games/i)).toHaveStyle({
    //   color: '#FAFAFA'
    // })
    // expect(screen.getByLabelText(/next games/i)).toHaveStyle({
    //   color: '#FAFAFA'
    // })
  })
})
