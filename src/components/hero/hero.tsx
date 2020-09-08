import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import {
  HeroWrapperStyled,
  HeroContentStyled,
  HeroIllustrationStyled,
} from "../../styled/heroStyles"

export type Svg = {
  file: {
    publicURL: string
  }
}

const Hero: React.FC<{}> = ({ children }) => {
  const { file }: Svg = useStaticQuery(graphql`
    query {
      file(name: { eq: "undraw_hire" }) {
        publicURL
      }
    }
  `)
  const hireSvg = file.publicURL

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
