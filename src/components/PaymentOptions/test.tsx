import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/helper'

import PaymentOptions from '.'
import cards from './mock'

describe('<PaymentOptions />', () => {
  it('should render the heading', () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    expect(screen.getByText(/add new credit card/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/3212/)).toBeInTheDocument()
    expect(screen.getByLabelText(/4326/)).toBeInTheDocument()
  })

  it('should handle select card when clicking on the label', async () => {
    renderWithTheme(<PaymentOptions cards={cards} handlePayment={jest.fn} />)

    userEvent.click(screen.getByLabelText(/4326/))
    await waitFor(() => {
      expect(screen.getByRole('radio', { name: /4326/ })).toBeChecked()
    })
  })

  it('should not call handlepayment when button is disabled', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    //q nao seja chamdao pois está desabilitado
    expect(handlePayment).not.toHaveBeenCalled()
  })

  it('should call handlepayment when card is selected', async () => {
    const handlePayment = jest.fn()

    renderWithTheme(
      <PaymentOptions cards={cards} handlePayment={handlePayment} />
    )

    userEvent.click(screen.getByLabelText(/4326/))
    userEvent.click(screen.getByRole('button', { name: /buy now/i }))
    //q nao seja chamdao pois está desabilitado
    await waitFor(() => {
      expect(handlePayment).toHaveBeenCalled()
    })
  })
})
