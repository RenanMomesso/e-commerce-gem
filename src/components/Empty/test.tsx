import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/helper'

import Empty, { EmptyProps } from '.'

const props: EmptyProps = {
  title: 'title1',
  description: 'description1'
}

describe('<Empty />', () => {
  it('should render correctly', () => {
    renderWithTheme(<Empty {...props} hasLink />)

    expect(
      screen.getByRole('image', { name: /Imagem mostrando/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: /title1/i })).toBeInTheDocument()
    expect(screen.getByText('description1')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /voltar/i })).toHaveAttribute(
      'href',
      '/'
    )
  })

  it('should not render link when haslink is not passed', () => {
    renderWithTheme(<Empty {...props} />)

    expect(
      screen.queryByRole('link', { name: /voltar/i })
    ).not.toBeInTheDocument()
  })

  it('should have display flex with column direction', () => {
    renderWithTheme(<Empty {...props} />)

    expect(screen.getByLabelText('firstdiv')).toHaveStyle({
      display: 'flex',
      flexDirection: 'column'
    })
  })
})
