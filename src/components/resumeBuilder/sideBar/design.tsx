import React, { useContext } from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { useTemplates } from "../../../hooks/use-templates"
import { CurrentTemplateContext } from "../../templateList/templateList"
import { useFormContext } from "../../../contexts/form-context"
import { device } from "../../../utils/device"

const Design = () => {
  const { edges: templates } = useTemplates()
  const { currentTemplate, setCurrentTemplate } = useContext(
    CurrentTemplateContext
  )
  const { lineHeight, setLineHeight } = useFormContext()

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    const maxValue = 1.7
    const minValue = 1
    const value = parseFloat(e.target.value)

    if (value <= maxValue && value >= minValue) setLineHeight(value)
  }

  return (
    <>
      <InputWrapperStyled>
        <label htmlFor="lineHeight">Line Height</label>
        <input
          type="number"
          step={"0.1"}
          name="lineHeight"
          value={lineHeight}
          onChange={handleInputChange}
        />
      </InputWrapperStyled>

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
    </>
  )
}

const InputWrapperStyled = styled.div`
  width: 70%;
  margin-bottom: 2rem;

  label {
    display: block;
    font-size: 14px;
    margin-bottom: 0.8rem;
  }

  input {
    width: 70%;
    padding: 6px 10px;

    ${device.tablet`
      width: 40%;
    `}

    ${device.laptop`
      width: 35%;
    `}

    ${device.laptopL`
      width: 30%;
    `}
  }
`

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
  ${props =>
    props.selected && "box-shadow: 0px 0px 7px 1px var(--blue-color);"};
`

export default Design
