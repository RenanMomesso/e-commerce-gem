import { screen } from '@testing-library/react'
import 'match-media-mock'
import React from 'react'
import { renderWithTheme } from 'utils/helper'

import Profile from '.'

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ asPath: '/profile/me' }))
}))

jest.mock('templates/Base', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Base">{children}</div>
    }
  }
})

jest.mock('components/Heading', () => {
  return {
    __esModule: true,
    default: function Mock({ children }: { children: React.ReactNode }) {
      return <div data-testid="Mock Heading">{children}</div>
    }
  }
})

jest.mock('components/ProfileMenu', () => {
  return {
    __esModule: true,
    default: function Mock() {
      return <div data-testid="Mock ProfileMenu" />
    }
  }
})

describe('<Profile />', () => {
  it('should render sections', () => {
    renderWithTheme(<Profile>Testando Profile</Profile>)
    expect(screen.getByText('Testando Profile')).toBeInTheDocument()
    expect(screen.getByText('My profile')).toBeInTheDocument()
    expect(screen.getByTestId('Mock ProfileMenu')).toBeInTheDocument()
  })
})
