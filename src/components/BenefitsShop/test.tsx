import { render, screen } from '@testing-library/react'

import BenefitsShop from '.'

describe('<BenefitsShop />', () => {
  it('should render the heading', () => {
    const { container } = render(<BenefitsShop />)

    expect(screen.getByRole('heading', { name: /BenefitsShop/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
