import React from 'react'

import { FooterStyled } from '../../styled/footerStyles'

const Footer = () => {
  return (
    <FooterStyled>
      <div>
        <div>
          Licensed under <span>MIT</span>
        </div>
        <div>
          Built with
          {` `} 💙 by{' '}
          <a href="https://github.com/Alexiosdut">Alexis Doutsinis</a>
        </div>
      </div>
    </FooterStyled>
  )
}

export default Footer
