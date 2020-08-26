import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  HeroWrapperStyled,
  HeroContentStyled,
  HeroIllustrationStyled,
} from "../../styled/heroStyles"

export type Svg = {
  allFile: {
    edges: {
      node: {
        publicURL: string
      }
    }[]
  }
}

const Hero: React.FC<{}> = ({ children }) => {
  const { allFile }: Svg = useStaticQuery(graphql`
    query {
      allFile(filter: { name: { eq: "undraw_hire" } }) {
        edges {
          node {
            publicURL
          }
        }
      }
    }
  `)
  const hireSvg = allFile.edges[0].node.publicURL

  return (
    <HeroWrapperStyled>
      <HeroContentStyled>{children}</HeroContentStyled>
      <HeroIllustrationStyled>
        <img src={hireSvg} alt="Hire illustration" />
      </HeroIllustrationStyled>
    </HeroWrapperStyled>
  )
}

export default Hero
