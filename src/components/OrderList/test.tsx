import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import OrderList from '.'
import Mock from './mock'

jest.mock('components/Empty', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock Empty"></div>
    }
  }
})

jest.mock('components/ProductItem', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ProductItem"></div>
    }
  }
})

describe('<OrderList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<OrderList items={Mock} />)

    expect(
      screen.getByRole('heading', { name: /my orders/i })
    ).toBeInTheDocument()

    expect(screen.getAllByTestId('Mock ProductItem')).toHaveLength(2)
  })

  it('should render empty state', () => {
    renderWithTheme(<OrderList items={[]} />)

    expect(screen.getByTestId('Mock Empty')).toBeInTheDocument()
  })
})
