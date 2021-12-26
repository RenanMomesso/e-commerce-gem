import { screen } from '@testing-library/react'
import PaymentOptionsMock from 'components/PaymentOptions/mock'
import { renderWithTheme } from 'utils/helper'

import CardList from '.'

describe('<CardList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CardList cards={PaymentOptionsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      'mastercard'
    )
    expect(screen.getByText(/3212/i)).toBeInTheDocument()
    expect(screen.getByText(/4326/i)).toBeInTheDocument()
  })
})
