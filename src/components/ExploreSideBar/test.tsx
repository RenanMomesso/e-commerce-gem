import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'
import mockitems from './mock'

// import { css } from 'styled-components'

import ExploreSideBar from '.'
import userEvent from '@testing-library/user-event'
// import { Overlay } from './styles'

describe('<ExploreSideBar />', () => {
  it('should render the heading', () => {
    renderWithTheme(<ExploreSideBar items={mockitems} onFilter={jest.fn} />)

    expect(screen.getByRole('heading', { name: /price/i })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /sort by/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /categoria/i })
    ).toBeInTheDocument()
  })

  it('should render inputs', () => {
    renderWithTheme(<ExploreSideBar items={mockitems} onFilter={jest.fn} />)

    expect(
      screen.getByRole('checkbox', { name: /under \$50/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('radio', { name: /Low to high/i })
    ).toBeInTheDocument()
  })

  it('should render the filter button', () => {
    renderWithTheme(<ExploreSideBar items={mockitems} onFilter={jest.fn} />)

    expect(screen.getByText('Filter')).toBeInTheDocument()
  })

  it('should check initial values that are passed', () => {
    renderWithTheme(
      <ExploreSideBar
        items={mockitems}
        onFilter={jest.fn}
        initialValues={{ brinco: true, sort_by: 'low-to-high' }}
      />
    )

    expect(screen.getByRole('checkbox', { name: /brinco/i })).toBeChecked()
    expect(screen.getByRole('radio', { name: /Low to high/i })).toBeChecked()
  })

  it('should return selected items on filter', () => {
    const onFilter = jest.fn()

    renderWithTheme(
      <ExploreSideBar
        items={mockitems}
        initialValues={{ brinco: true, sort_by: 'low-to-high' }}
        onFilter={onFilter}
      />
    )

    userEvent.click(screen.getByRole('button', { name: /Filter/i }))
    expect(onFilter).toBeCalledWith({
      brinco: true,
      sort_by: 'low-to-high'
    })
  })

  it('should filter when checked values', () => {
    const onFilter = jest.fn()

    renderWithTheme(<ExploreSideBar items={mockitems} onFilter={onFilter} />)

    userEvent.click(screen.getByLabelText(/Pulseira/i))
    userEvent.click(screen.getByLabelText(/Under \$50/i))
    userEvent.click(screen.getByRole('radio', { name: /Low to high/i }))
    userEvent.click(screen.getByRole('button', { name: /Filter/i }))

    expect(onFilter).toBeCalledWith({
      pulseira: true,
      sort_by: 'low-to-high',
      under50: true
    })
  })

  // it('should open/close sidebar when filtering on mobile ', () => {
  //   const { container } = renderWithTheme(
  //     <ExploreSideBar items={mockitems} onFilter={jest.fn} />
  //   )

  //   const variant = {
  //     media: '(max-width:768px)',
  //     modifier: String(css`
  //       ${Overlay}
  //     `)
  //   }

  //   const Element = container.firstChild

  //   expect(Element).not.toHaveStyleRule('opacity', '1', variant)

  //   userEvent.click(screen.getByLabelText(/open filters/))

  //   expect(Element).toHaveStyleRule('opacity', '1', variant)

  //   userEvent.click(screen.getByLabelText(/close filters/))

  //   expect(Element).not.toHaveStyleRule('opacity', '1', variant)

  //   userEvent.click(screen.getByLabelText(/open filters/))

  //   userEvent.click(screen.getByRole('button', { name: /filter/i }))

  //   expect(Element).not.toHaveStyleRule('opacity', '1', variant)
  // })
})
