import { renderWithTheme } from 'utils/helper'

import { Grid } from '.'

describe('<Grid />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Grid />)

    expect(container).toBeInTheDocument()
  })
})
