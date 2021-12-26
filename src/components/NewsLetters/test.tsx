import { render, screen } from '@testing-library/react'

import NewsLetters from '.'

describe('<NewsLetters />', () => {
  it('should render the heading', () => {
    const { container } = render(<NewsLetters />)

    expect(screen.getByRole('heading', { name: /NewsLetters/i })).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
