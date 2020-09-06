import React from "react"
import styled from "styled-components"

import {
  SideStyled,
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
} from "./commonStyles"
import { useFormContext } from "../../contexts/form-context"

const Minimal3 = () => {
  const {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
  } = useFormContext()

  return (
    <WrapperStyled>
      <SideStyled pr>
        <TitleStyled uppercase={uppercaseHeading}>
          <div>{profile.fullName}</div>
          <span>{profile.subtitle}</span>
        </TitleStyled>
        <SectionHeadingStyled center ls uppercase={uppercaseHeading}>
          Profile
        </SectionHeadingStyled>
        <SectionContentStyled>{profile.profileSummary}</SectionContentStyled>
        <ContactStyled>
          {contactList.map(item => (
            <div key={item.id}>{item.contactItem}</div>
          ))}
        </ContactStyled>
        <SectionHeadingStyled center ls uppercase={uppercaseHeading}>
          Education
        </SectionHeadingStyled>
        <EducationStyled>
          {educationList.map(item => (
            <div key={item.id}>
              <SectionSubHeadingStyled>
                {item.university}
              </SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.specialize}
              </SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.website}
              </SectionSubHeadingStyled>
            </div>
          ))}
        </EducationStyled>
      </SideStyled>

      <SideStyled>
        <SectionHeadingStyled first ls uppercase={uppercaseHeading}>
          Experience
        </SectionHeadingStyled>
        {experienceList.map(item => (
          <div key={item.id}>
            <SectionSubHeadingStyled>{item.role}</SectionSubHeadingStyled>
            <SectionSubHeadingStyled sm>{item.company}</SectionSubHeadingStyled>
            <SectionContentStyled>{item.description}</SectionContentStyled>
          </div>
        ))}
        <SectionHeadingStyled ls uppercase={uppercaseHeading}>
          Skills
        </SectionHeadingStyled>
        <SectionContentStyled>{skills}</SectionContentStyled>
      </SideStyled>
    </WrapperStyled>
  )
}

const WrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 32px 40px;
`

type Title = {
  uppercase: boolean
}

const TitleStyled = styled.div<Title>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${props => props.uppercase && "text-transform: uppercase;"};

  div {
    font-size: 24px;
    font-weight: 700;
    text-align: center;
  }

  span {
    margin-top: 10px;
    font-size: 14px;
    font-style: italic;
  }
`

const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  margin-top: 32px;

  div {
    margin-top: 5px;

    &:first-child {
      margin: 0;
    }
  }
`

const EducationStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default Minimal3
