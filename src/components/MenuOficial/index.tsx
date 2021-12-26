import CartDropdown from 'components/CartDropdown'
import UserDropdown from 'components/UserDropdown'
import Link from 'next/link'
import { useState } from 'react'
import { LocationPin, OldPhone } from 'styled-icons/entypo'
import { Handbag } from 'styled-icons/bootstrap'
import { Phone } from 'styled-icons/bootstrap'
import { Search } from 'styled-icons/evil'

import * as S from './styles'

const MenuOficial = () => (
  <S.Wrapper>
    {/* Div container dentro */}
    <div
      style={{
        width: '100%'
      }}
    >
      {/* Menu Em cima Desktop */}
      <S.TopMenuDesktop>
        <S.Location>
          <p>Nossa Loja:</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginLeft: -4
            }}
          >
            <div>
              <LocationPin height={30} color="#bfa4f7" />
            </div>
            <div>
              <p style={{ fontWeight: 'bold' }}>London</p>
              <p>Avenida tal</p>
            </div>
          </div>
        </S.Location>
        <S.TelephoneOnline>
          <p>Contato Online</p>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: -23,
              marginBottom: 5
            }}
          >
            <Phone height={30} color="#bfa4f7" />
            <p style={{ fontWeight: 'bold', fontSize: 13 }}>
              + 55 (19) 981317613
            </p>
          </div>
        </S.TelephoneOnline>
        <S.LogoOficial>
          <a href="/" passHref>
            <img src="/img/violeta1.png" height={133} />
          </a>
        </S.LogoOficial>
        <S.SearchDiv>
          <input type="text" placeholder="Procure por produtos..." />
          <Search height={35} color="#0d0d0d" />
        </S.SearchDiv>
        <S.UserDiv>
          <UserDropdown username="Renan" />
        </S.UserDiv>
        <S.CartDiv>
          <CartDropdown />
        </S.CartDiv>
      </S.TopMenuDesktop>
      <div
        style={{
          height: 50,
          maxWidth: '1200px',
          marginRight: 'auto',
          marginLeft: 'auto',
          overflow: 'hidden'
        }}
      >
        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            height: 50
          }}
        >
          <S.UlNav>
            <S.ItemMenu>Home</S.ItemMenu>
            <S.ItemMenu>Mais Vendidos</S.ItemMenu>
            <S.ItemMenu>Pulseiras</S.ItemMenu>
            <S.ItemMenu>Blog</S.ItemMenu>
            <S.ItemMenu>Galeria</S.ItemMenu>
            <S.ItemMenu>Sobre</S.ItemMenu>
            <S.ItemMenu>Contate-nos</S.ItemMenu>
            <S.ItemMenu>Pulseiras</S.ItemMenu>
            <S.ItemMenu>Blog</S.ItemMenu>
            <S.ItemMenu>Galeria</S.ItemMenu>
            <S.ItemMenu>Sobre</S.ItemMenu>
            <S.ItemMenu>Sobre</S.ItemMenu>
            <S.ItemMenu>Sobre</S.ItemMenu>
            <S.ItemMenu>Sobre</S.ItemMenu>
            <S.ItemMenu>Sobre</S.ItemMenu>
            <S.ItemMenu>Sobre</S.ItemMenu>
          </S.UlNav>
        </ul>
      </div>
      {/* Menu em baixo Desktop */}
    </div>

    {/* Menu mobile */}
  </S.Wrapper>
)

export default MenuOficial
