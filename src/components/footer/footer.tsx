import React from "react"

import { FooterStyled } from "../../styled/footerStyles"

const Footer = () => {
  return (
    <FooterStyled>
      © {new Date().getFullYear()}, Built with
      {` `} 💙 by <a href="https://github.com/Alexiosdut">Alexis Doutsinis</a>
    </FooterStyled>
  )
}

export default Footer
