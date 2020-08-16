import React from "react"

import outerSpace from "../../images/Illustrations/undraw_Outer_space.svg"

import {
  FeaturesWrapperStyled,
  FeaturesContentStyled,
  FeaturesIllustrationStyled,
} from "../../styled/featuresStyles"

const Features: React.FC<{}> = ({ children }) => {
  return (
    <FeaturesWrapperStyled>
      <FeaturesContentStyled>{children}</FeaturesContentStyled>
      <FeaturesIllustrationStyled>
        <img src={outerSpace} alt="Outer space illustration" />
      </FeaturesIllustrationStyled>
    </FeaturesWrapperStyled>
  )
}

export default Features
