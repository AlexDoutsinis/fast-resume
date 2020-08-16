import { Link } from "gatsby"
import React from "react"
import { HeaderStyled } from "../styled/headerStyles"

type Props = {
  siteTitle: string
}

const Header = ({ siteTitle }: Props) => (
  <HeaderStyled>
    <h1>
      <Link to="/">{siteTitle}</Link>
    </h1>
  </HeaderStyled>
)

export default Header
