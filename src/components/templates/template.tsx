import React from "react"
import Img from "gatsby-image"

import { TemplateStyled } from "../../styled/templatesStyles"

type Props = {
  node: {
    name: string
    childImageSharp: {
      fluid: any
    }
  }
}

const Template = ({ node }: Props) => {
  return (
    <TemplateStyled>
      <div>
        <Img
          fluid={node.childImageSharp.fluid}
          alt={`Resume template '${node.name}'`}
        />
      </div>
    </TemplateStyled>
  )
}

export default Template
