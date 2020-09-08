import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  FeaturesWrapperStyled,
  FeaturesContentStyled,
  FeaturesIllustrationStyled,
} from "../../styled/featuresStyles"
import { Svg } from "../hero/hero"

const Features: React.FC<{}> = ({ children }) => {
  const { file }: Svg = useStaticQuery(graphql`
    query {
      file(name: { eq: "undraw_Outer_space" }) {
        publicURL
      }
    }
  `)
  const outerSpaceSvg = file.publicURL

  return (
    <FeaturesWrapperStyled>
      <FeaturesContentStyled>{children}</FeaturesContentStyled>
      <FeaturesIllustrationStyled>
        <img src={outerSpaceSvg} alt="Outer space illustration" />
      </FeaturesIllustrationStyled>
    </FeaturesWrapperStyled>
  )
}

export default Features
