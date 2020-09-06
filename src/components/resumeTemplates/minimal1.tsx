import React from "react"
import styled from "styled-components"

import { useFormContext } from "../../contexts/form-context"
import {
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  SideStyled,
} from "./commonStyles"

const Minimal1 = () => {
  const {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
    letterSpacing,
  } = useFormContext()

  return (
    <>
      <HeaderStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
        <span>{profile.fullName}</span>
        <div>{profile.subtitle}</div>
      </HeaderStyled>
      <MainStyled>
        <SideStyled pr>
          <SectionHeadingStyled
            first
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
          >
            Profile
          </SectionHeadingStyled>
          <SectionContentStyled>{profile.profileSummary}</SectionContentStyled>
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
          >
            Skills
          </SectionHeadingStyled>
          <SectionContentStyled>{skills}</SectionContentStyled>
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
          >
            Contact
          </SectionHeadingStyled>
          <SectionContentStyled>
            {contactList.map(item => (
              <div key={item.id}>{item.contactItem}</div>
            ))}
          </SectionContentStyled>
        </SideStyled>
        <SideStyled>
          <SectionHeadingStyled
            first
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
          >
            Experience
          </SectionHeadingStyled>
          {experienceList.map(item => (
            <div key={item.id}>
              <SectionSubHeadingStyled>{item.role}</SectionSubHeadingStyled>
              <SectionSubHeadingStyled sm>
                {item.company}
              </SectionSubHeadingStyled>
              <SectionContentStyled>{item.description}</SectionContentStyled>
            </div>
          ))}
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
          >
            Education
          </SectionHeadingStyled>
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
        </SideStyled>
      </MainStyled>
    </>
  )
}

type Header = {
  uppercase: boolean
  letterSpacing: number
}

const HeaderStyled = styled.div<Header>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 120px;
  ${props => props.uppercase && "text-transform: uppercase;"};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};

  span {
    font-size: 28px;
    font-weight: 700;
  }

  div {
    font-size: 16px;
    margin-top: 12px;
  }
`

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  padding: 0 32px;
`

export default Minimal1
