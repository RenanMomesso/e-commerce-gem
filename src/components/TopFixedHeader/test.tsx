import { render, screen } from '@testing-library/react'

import TopFixedHeader from '.'

describe('<TopFixedHeader />', () => {
  it('should render the heading', () => {
    const { container } = render(<TopFixedHeader />)

    expect(screen.getByRole('heading', { name: /TopFixedHeader/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
