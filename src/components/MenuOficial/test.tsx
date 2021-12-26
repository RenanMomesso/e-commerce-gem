import { render, screen } from '@testing-library/react'

import MenuOficial from '.'

describe('<MenuOficial />', () => {
  it('should render the heading', () => {
    const { container } = render(<MenuOficial />)

    expect(screen.getByRole('heading', { name: /MenuOficial/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
