import React from "react"

import hireImg from "../../images/Illustrations/undraw_hire.svg"

import {
  HeroWrapperStyled,
  HeroContentStyled,
  HeroIllustrationStyled,
} from "../../styled/heroStyles"

const Hero: React.FC<{}> = ({ children }) => {
  return (
    <HeroWrapperStyled>
      <HeroContentStyled>{children}</HeroContentStyled>
      <HeroIllustrationStyled>
        <img src={hireImg} alt="hire illustration" />
      </HeroIllustrationStyled>
    </HeroWrapperStyled>
  )
}

export default Hero
