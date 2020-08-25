import React from "react"
import Img from "gatsby-image"

type Props = {
  node: {
    name: string
    childImageSharp: {
      fluid: any
    }
  }
  openModal: (templateName: string) => void
}

const Template = ({ node, openModal }: Props) => {
  return (
    <div onClick={() => openModal(node.name)}>
      <Img
        fluid={node.childImageSharp.fluid}
        alt={`Resume template '${node.name}'`}
      />
    </div>
  )
}

export default Template
