import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import { FormWrapper, FormLink } from '.'

describe('<Form />', () => {
  it('should render the heading', () => {
    renderWithTheme(
      <FormWrapper>
        <FormLink>
          My nice <a href="link">link</a>
        </FormLink>
      </FormWrapper>
    )

    expect(screen.getByRole('link', { name: /link/i })).toBeInTheDocument()
  })
})
