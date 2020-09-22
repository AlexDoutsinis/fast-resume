import React from 'react'
import { HeaderStyled } from '../styled/headerStyles'

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <HeaderStyled>
    <h1>
      <a href="https://fastresume.me/">{siteTitle}</a>
    </h1>
  </HeaderStyled>
)

export default Header
