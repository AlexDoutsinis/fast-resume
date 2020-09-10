import React from "react"

import {
  FeaturesWrapperStyled,
  FeaturesContentStyled,
} from "../../styled/featuresStyles"
import { IllustrationStyled } from "../../styled/commonStyles"
import OuterSpaceSvg from "../../images/Illustrations/undraw_Outer_space.svg"

const Features: React.FC<{}> = ({ children }) => {
  return (
    <FeaturesWrapperStyled>
      <FeaturesContentStyled>{children}</FeaturesContentStyled>
      <IllustrationStyled>
        <OuterSpaceSvg />
      </IllustrationStyled>
    </FeaturesWrapperStyled>
  )
}

export default Features
