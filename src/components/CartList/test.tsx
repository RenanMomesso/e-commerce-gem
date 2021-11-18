import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import CartList from '.'
import mockItems from './mock'

describe('<CartList />', () => {
  it('should render the heading', () => {
    renderWithTheme(<CartList items={mockItems} total="R$ 300,00" />)

    expect(screen.getAllByRole('heading')).toHaveLength(2)
    expect(screen.getByText('R$ 300,00')).toHaveStyle({ color: '#F231A5' })
  })
})
