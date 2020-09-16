import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import { CirclePicker } from 'react-color'

import { useTemplates } from '../../../hooks/use-templates'
import { useFormContext } from '../../../contexts/form-context'
import { device } from '../../../utils/device'
import { useTemplateListContext } from '../../../contexts/templateList-context'
import { colors } from '../../../utils/colorPicker'

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
    letterSpacing,
    setLetterSpacing,
    color,
    setColor,
    font,
    setFont,
  } = useFormContext()

  function handleLineHeightChange(e: React.ChangeEvent<HTMLInputElement>) {
    const maxValue = 1.5
    const minValue = 1
    const value = parseFloat(e.target.value)

    if (value <= maxValue && value >= minValue) setLineHeight(value)
  }

  function handleLetterSpacingChange(e: React.ChangeEvent<HTMLInputElement>) {
    const maxValue = 2.5
    const minValue = 1
    const value = parseFloat(e.target.value)

    if (value <= maxValue && value >= minValue) setLetterSpacing(value)
  }

  function handleColorChange({ hex }: { hex: string }) {
    setColor(hex)
  }

  function handleFontChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFont(e.target.value)
  }

  return (
    <DesignTabWrapperStyled>
      <InputWrapperStyled>
        <label htmlFor="lineHeight">Line Height - Body</label>
        <input
          type="number"
          step={'0.05'}
          name="lineHeight"
          value={lineHeight}
          onChange={handleLineHeightChange}
        />
      </InputWrapperStyled>
      <InputWrapperStyled>
        <label htmlFor="letterSpacing">Letter Spacing - Headings</label>
        <input
          type="number"
          step={'0.5'}
          name="letterSpacing"
          value={letterSpacing}
          onChange={handleLetterSpacingChange}
        />
      </InputWrapperStyled>
      <CheckboxWrapperStyled>
        <label htmlFor="uppercase">Uppercase - Headings</label>
        <div>
          <input
            name="uppercase"
            type="checkbox"
            checked={uppercaseHeading}
            onChange={() => setUppercaseHeading(isUppercase => !isUppercase)}
          />
        </div>
      </CheckboxWrapperStyled>
      <HeadingStyled>Color</HeadingStyled>
      <CirclePickerWrapperStyled>
        <CirclePicker
          colors={colors}
          color={color}
          onChange={handleColorChange}
          circleSize={22}
          circleSpacing={10}
        />
      </CirclePickerWrapperStyled>
      <HeadingStyled mt>Font</HeadingStyled>
      <SelectWrapperStyled>
        <SelectStyled value={font} onChange={handleFontChange}>
          <option value="Lato">Lato</option>
          <option value="Montserrat">Montserrat</option>
          <option value="Karla">Karla</option>
          <option value="Source Sans Pro">Source Sans Pro</option>
          <option value="Titillium Web">Titillium Web</option>
          <option value="Arvo">Arvo</option>
        </SelectStyled>
      </SelectWrapperStyled>
      <HeadingStyled>Template</HeadingStyled>
      <ImgBoxWrapperStyled>
        <ImgBoxStyled>
          {templates.map(({ node }) => (
            <ImgWrapperStyled
              selected={currentTemplate === node.name ? true : false}
              key={node.name}
              onClick={() =>
                dispatch({
                  type: 'setCurrentTemplate',
                  templateName: node.name,
                })
              }
            >
              <Img
                fluid={node.childImageSharp.fluid}
                alt={`Resume template: '${node.name}'`}
              />
            </ImgWrapperStyled>
          ))}
        </ImgBoxStyled>
      </ImgBoxWrapperStyled>
    </DesignTabWrapperStyled>
  )
}

const DesignTabWrapperStyled = styled.div`
  font-size: 14px;
`

const InputWrapperStyled = styled.div`
  width: 70%;
  margin-bottom: 1.2rem;
  
  label {
    display: block;
    margin-bottom: 0.8rem;
  }

  input {
    width: 70%;
    padding: 6px 10px;
    margin: 0;

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
  margin-bottom: 1.2rem;

  div {
    flex-basis: 40px;
    height: 0.8rem;
  }

  input {
    cursor: pointer;
    margin: 0;
  }

  ${device.mobileM`
    width: 80%;
  `}

  ${device.mobileL`
    width: 75%;
  `}

  ${device.tablet`
    width: 100%;
  `}
`

type HeadingStyledProps = {
  mt?: boolean
}

const HeadingStyled = styled.div<HeadingStyledProps>`
  margin-bottom: 1.2rem;
  ${props => props.mt && 'margin-top: 1.2rem;'}
`

const ImgBoxWrapperStyled = styled.div`
  overflow: auto;
`

const ImgBoxStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 50px);
  grid-gap: 1.2rem;
  padding: 7px;
  width: 390px;
  width: 340px;

  ${device.tablet`
    width: 510px;
    width: 390px;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(5, 60px);
  `};
`

type ImgWrapperStyledProps = {
  selected: boolean
}

const ImgWrapperStyled = styled.div<ImgWrapperStyledProps>`
  cursor: pointer;
  border: solid var(--light-blue-color) 1px;
  box-shadow: 0px 0px 7px 1px var(--light-blue-color);
  border-radius: 5px;

  ${props => props.selected && 'border: solid var(--blue-color) 1px;'};
  ${props =>
    props.selected && 'box-shadow: 0px 0px 7px 1px var(--blue-color);'};
`

const SelectWrapperStyled = styled.div`
  width: 70%;
  margin-bottom: 1.2rem;
`

const SelectStyled = styled.select`
  padding: 6px 10px;
  width: 70%;

  option {
    padding: 6px 10px;
  }

  ${device.tablet`
    width: 40%;
  `};

  ${device.laptop`
    width: 35%;
  `};

  ${device.laptopL`
    width: 30%;
  `};
`

const CirclePickerWrapperStyled = styled.div`
  ${device.mobileS`
    overflow-x: auto;
    overflow-y: hidden;
  `}

  ${device.tablet`
    overflow: visible;
  `}
`
export default Design
