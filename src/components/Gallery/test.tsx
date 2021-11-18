import { fireEvent, screen } from '@testing-library/react'
import 'match-media-mock'
import { renderWithTheme } from 'utils/helper'

import Gallery from '.'

import MockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    renderWithTheme(<Gallery items={MockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Gallery Image 1/i })
    ).toHaveAttribute('src', MockItems[0].src)

    expect(
      screen.getByRole('button', { name: 'Thumb - Gallery Image 2' })
    ).toHaveAttribute('src', MockItems[1].src)
  })

  it('should open modal when clicked', () => {
    renderWithTheme(<Gallery items={MockItems.slice(0, 2)} />)

    //selecionar modal
    const modal = screen.getByLabelText('modal')

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should close modal when ESCAPE is pressed', () => {
    const { container } = renderWithTheme(
      <Gallery items={MockItems.slice(0, 2)} />
    )

    //selecionar modal
    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    //clickar pra fechar
    fireEvent.keyUp(container, { key: 'Escape' })

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
  it('should close modal when clicked', () => {
    renderWithTheme(<Gallery items={MockItems.slice(0, 2)} />)

    //selecionar modal
    const modal = screen.getByLabelText('modal')

    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    //clickar pra fechar
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))

    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should open modal with selected image', async () => {
    renderWithTheme(<Gallery items={MockItems.slice(0, 2)} />)

    fireEvent.click(screen.getByRole('button', { name: /Gallery Image 2/i }))
    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })
    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })
})
