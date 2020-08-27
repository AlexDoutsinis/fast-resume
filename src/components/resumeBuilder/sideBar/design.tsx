import React, { useContext } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { useTemplates } from "../../../hooks/use-templates"
import { CurrentTemplateContext } from "../../templateList/templateList"

const Design = () => {
  const { edges: templates } = useTemplates()
  const { currentTemplate, setCurrentTemplate } = useContext(
    CurrentTemplateContext
  )

  return (
    <ImgBoxStyled>
      {templates.map(({ node }) => (
        <ImgWrapperStyled
          selected={currentTemplate === node.name ? true : false}
          key={node.name}
          onClick={() => setCurrentTemplate(node.name)}
        >
          <Img
            fluid={node.childImageSharp.fluid}
            alt={`Resume template: '${node.name}'`}
          />
        </ImgWrapperStyled>
      ))}
    </ImgBoxStyled>
  )
}

const ImgBoxStyled = styled.div`
  display: grid;
  grid-template-columns: 80px 80px;
  grid-gap: 1.5rem;
  margin: 7px 0;
`

type ImgWrapperStyledProps = {
  selected: boolean
}

const ImgWrapperStyled = styled.div<ImgWrapperStyledProps>`
  cursor: pointer;
  border: solid var(--light-blue-color) 0.5px;
  box-shadow: 0px 0px 7px 1px var(--light-blue-color);
  border-radius: 5px;

  ${props => props.selected && "border: solid var(--blue-color) 0.5px;"};
  ${props => props.selected && "box-shadow: 0px 0px 7px 1px var(--blue-color)"}
`

export default Design
