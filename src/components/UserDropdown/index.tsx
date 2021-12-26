import { ChevronDown } from '@styled-icons/boxicons-regular'
import Dropdown from 'components/Dropdown'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from 'styled-icons/material-outlined'
import Link from 'next/link'

import * as S from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={28} color="#2c2c2c" />
        <S.Username>{username}</S.Username>
        <ChevronDown size={24} color="#0d0d0d" />
      </>
    }
  >
    <S.Nav>
      <Link href="/profile/me" passHref>
        <S.Link>
          <AccountCircle color="#0d0d0d" />
          <span>My Profile</span>
        </S.Link>
      </Link>

      <Link href="/wishlist" passHref>
        <S.Link title="Wishlist">
          <FavoriteBorder />
          <span>Wishlist</span>
        </S.Link>
      </Link>

      <Link href="/logout" passHref>
        <S.Link title="Logout">
          <ExitToApp />
          <span>Logout</span>
        </S.Link>
      </Link>
    </S.Nav>
  </Dropdown>
)

export default UserDropdown
