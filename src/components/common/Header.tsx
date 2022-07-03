import React, { FunctionComponent } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Image from 'next/image'

const HeaderWrapper = styled.header`
  position: sticky;
  z-index: 200;
  background-color: #022c43;
  top: 0;
  left: 0;
  height: 54px;
  width: 100%;
`

const NavWrapper = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 720px;
  margin: 0 auto;
  padding: 0 12px;
`

const LinkWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  grid-gap: 0.5rem;
  gap: 0.5rem;

  a {
    padding: 12px;
  }
`

const Header: FunctionComponent = function () {
  return (
    <HeaderWrapper>
      <NavWrapper>
        <Link href="/">
          <a>
            <Image src={'/img/logo.png'} width={40} height={40} />
          </a>
        </Link>

        <LinkWrapper>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/post">
            <a>Posts</a>
          </Link>
        </LinkWrapper>
      </NavWrapper>
    </HeaderWrapper>
  )
}

export default Header
