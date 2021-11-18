import { screen, waitFor } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/helper'
import userEvent from '@testing-library/user-event'

import Checkbox from '.'

describe('<Checkbox />', () => {
  it('should render the checkbox', () => {
    renderWithTheme(<Checkbox label="checkbox label" labelFor="check" />)

    screen.debug(screen.getByText(/checkbox label/))

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/)).toHaveAttribute('for', 'check')
  })

  it('should render without label', () => {
    renderWithTheme(<Checkbox />)
    expect(screen.queryByText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with blacklabel', () => {
    renderWithTheme(
      <Checkbox label="checkbox label" labelFor="check" labelColor="black" />
    )
    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changed', () => {
    //função q ficara ouvindo caso este valor mude
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="checkbox label" onCheck={onCheck} />)
    expect(onCheck).not.toBeCalled()
  })

  it('should dispatch onCheck when status changed', async () => {
    //função q ficara ouvindo caso este valor mude
    const onCheck = jest.fn()
    renderWithTheme(<Checkbox label="Checkbox" onCheck={onCheck} isChecked />)
    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should dispatch onCheck when status changed', async () => {
    renderWithTheme(<Checkbox label="Checkbox" labelFor="Checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/Checkbox/i)).toHaveFocus()
  })
})
