import React from "react"

import { HeroWrapperStyled, HeroContentStyled } from "../../styled/heroStyles"
import { IllustrationStyled } from "../../styled/commonStyles"
import HireSvg from "../../images/Illustrations/undraw_hire.svg"

const Hero: React.FC<{}> = ({ children }) => {
  return (
    <HeroWrapperStyled>
      <HeroContentStyled>{children}</HeroContentStyled>
      <IllustrationStyled>
        <HireSvg />
      </IllustrationStyled>
    </HeroWrapperStyled>
  )
}

export default Hero
