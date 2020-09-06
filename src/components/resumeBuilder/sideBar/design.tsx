import React from "react"
import Img from "gatsby-image"
import styled from "styled-components"

import { useTemplates } from "../../../hooks/use-templates"
import { useFormContext } from "../../../contexts/form-context"
import { device } from "../../../utils/device"
import { useTemplateListContext } from "../../../contexts/templateList-context"

const Design = () => {
  const { edges: templates } = useTemplates()
  const {
    state: { currentTemplate },
    dispatch,
  } = useTemplateListContext()
  const {
    lineHeight,
    setLineHeight,
    uppercaseHeading,
    setUppercaseHeading,
  } = useFormContext()

  function handleLineHeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    const maxValue = 1.5
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
          step={"0.05"}
          name="lineHeight"
          value={lineHeight}
          onChange={handleLineHeightChange}
        />
      </InputWrapperStyled>
      <CheckboxWrapperStyled>
        <label htmlFor="uppercase">Uppercase Headings</label>
        <div>
          <input
            name="uppercase"
            type="checkbox"
            checked={uppercaseHeading}
            onChange={() => setUppercaseHeading(isUppercase => !isUppercase)}
          />
        </div>
      </CheckboxWrapperStyled>

      <ImgBoxStyled>
        {templates.map(({ node }) => (
          <ImgWrapperStyled
            selected={currentTemplate === node.name ? true : false}
            key={node.name}
            onClick={() =>
              dispatch({ type: "setCurrentTemplate", templateName: node.name })
            }
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
  margin-bottom: 1.5rem;

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

const CheckboxWrapperStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    flex-basis: 50px;
    height: 1rem;
  }

  input {
    cursor: pointer;
    margin: 0;
  }
`

const ImgBoxStyled = styled.div`
  display: grid;
  grid-template-columns: 80px 80px;
  grid-gap: 1.5rem;
  margin: 7px 0;
  margin-top: 2.5rem;
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
