import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  FeaturesWrapperStyled,
  FeaturesContentStyled,
  FeaturesIllustrationStyled,
} from "../../styled/featuresStyles"
import { Svg } from "../hero/hero"

const Features: React.FC<{}> = ({ children }) => {
  const { allFile }: Svg = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "undraw_Outer_space" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  const outerSpaceSvg = allFile.edges[0].node.publicURL

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
