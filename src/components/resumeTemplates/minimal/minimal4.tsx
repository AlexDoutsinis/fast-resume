import React from "react"
import styled from "styled-components"

import { SectionSubHeadingStyled } from "../commonStyles"
import { useFormContext } from "../../../contexts/form-context"

const Minimal4 = () => {
  const {
    profile,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
    letterSpacing,
  } = useFormContext()

  return (
    <WrapperStyled>
      <TitleStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
        <div>{profile.fullName}</div>
        <span>{profile.subtitle}</span>
      </TitleStyled>
      <SectionStyled first>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
        >
          About Me
        </SectionHeadingStyled>
        <div>{profile.profileSummary}</div>
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
        >
          Experience
        </SectionHeadingStyled>
        {experienceList.map(item => (
          <div key={item.id}>
            <SectionSubHeadingStyled noMargin>
              {item.role}
            </SectionSubHeadingStyled>
            <SectionSubHeadingStyled noMargin sm>
              {item.company}
            </SectionSubHeadingStyled>
            <div>{item.description}</div>
          </div>
        ))}
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
        >
          Education
        </SectionHeadingStyled>
        {educationList.map(item => (
          <div key={item.id}>
            <SectionSubHeadingStyled noMargin>
              {item.university}
            </SectionSubHeadingStyled>
            <SectionSubHeadingStyled noMargin sm>
              {item.specialize}
            </SectionSubHeadingStyled>
            <SectionSubHeadingStyled noMargin sm>
              {item.website}
            </SectionSubHeadingStyled>
          </div>
        ))}
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
        >
          Contact
        </SectionHeadingStyled>
        {contactList.map(item => (
          <div key={item.id}>{item.contactItem}</div>
        ))}
      </SectionStyled>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
  padding: 0 40px;
  padding-bottom: 40px;
`

type Title = {
  uppercase: boolean
  letterSpacing: number
}

const TitleStyled = styled.div<Title>`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  ${props => props.uppercase && "text-transform: uppercase;"};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};

  div {
    font-size: 32px;
    font-weight: 700;
  }

  span {
    margin-top: 6px;
    font-size: 14px;
    font-style: italic;
  }
`

type Section = {
  first?: boolean
}

const SectionStyled = styled.div<Section>`
  display: flex;
  flex-direction: row;
  margin-top: 40px;
  ${props => props.first && "margin: 0;"};
`

type SectionHeadingStyledProps = {
  uppercase: boolean
  letterSpacing: number
}

const SectionHeadingStyled = styled.div<SectionHeadingStyledProps>`
  margin-right: 20px;
  margin-top: -2px;
  font-size: 14px;
  font-weight: 700;
  min-width: 110px;
  max-width: 110px;
  text-align: end;
  ${props => props.uppercase && "text-transform: uppercase;"};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

export default Minimal4
