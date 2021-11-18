import { render } from '@testing-library/react'

import FormProfile from '.'

describe('<FormProfile />', () => {
  it('should render the heading', () => {
    const { container } = render(<FormProfile />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
