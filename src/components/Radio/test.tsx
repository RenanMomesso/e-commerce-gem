import { screen, waitFor } from '@testing-library/react'
import theme from 'styles/theme'
import { renderWithTheme } from 'utils/helper'
import userEvent from '@testing-library/user-event'

import Radio from '.'

describe('<RadioBox />', () => {
  it('should render the checkbox', () => {
    renderWithTheme(<Radio label="radio" labelFor="check" value="anyValue" />)

    const label = screen.getByText('radio')

    screen.debug(screen.getByText(/radio/i))

    expect(label).toBeInTheDocument()
    expect(label).toHaveStyle({ color: theme.colors.white })
  })

  it('should render without label', () => {
    renderWithTheme(<Radio />)
    expect(screen.queryByText('Checkbox')).not.toBeInTheDocument()
  })

  it('should render with blacklabel', () => {
    renderWithTheme(
      <Radio label="checkbox label" labelFor="check" labelColor="black" />
    )
    expect(screen.getByText('checkbox label')).toHaveStyle({
      color: theme.colors.black
    })
  })

  it('should dispatch onCheck when status changed', () => {
    //função q ficara ouvindo caso este valor mude
    const onCheck = jest.fn()
    renderWithTheme(<Radio label="checkbox label" onCheck={onCheck} />)
    expect(onCheck).not.toBeCalled()
  })

  it('should dispatch onCheck when status changed', async () => {
    //função q ficara ouvindo caso este valor mude
    const onCheck = jest.fn()
    renderWithTheme(
      <Radio label="Checkbox" onCheck={onCheck} value="any value" />
    )
    userEvent.click(screen.getByRole('radio'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    // expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should dispatch onCheck when status changed', async () => {
    renderWithTheme(<Radio label="Checkbox" labelFor="Checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()

    expect(screen.getByLabelText(/Checkbox/i)).toHaveFocus()
  })
})
