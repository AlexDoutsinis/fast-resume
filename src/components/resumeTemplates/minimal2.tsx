import React from "react"
import styled from "styled-components"

import { useFormContext } from "../../contexts/form-context"
import {
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  SideStyled,
} from "./commonStyles"

const Minimal2 = () => {
  const {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
  } = useFormContext()

  return (
    <>
      <HeaderStyled>
        <TitleStyled uppercase={uppercaseHeading}>
          <FullNameStyled>{profile.fullName}</FullNameStyled>
          <SubtitleStyled>{profile.subtitle}</SubtitleStyled>
        </TitleStyled>
        <ContactStyled>
          {contactList.map(item => (
            <div key={item.id}>{item.contactItem}</div>
          ))}
        </ContactStyled>
      </HeaderStyled>
      <MainStyled>
        <SideStyled pr>
          <SectionHeadingStyled first uppercase={uppercaseHeading}>
            Profile
          </SectionHeadingStyled>
          <SectionContentStyled>{profile.profileSummary}</SectionContentStyled>
          <SectionHeadingStyled uppercase={uppercaseHeading}>
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
        </SideStyled>
        <SideStyled>
          <SectionHeadingStyled first uppercase={uppercaseHeading}>
            Skills
          </SectionHeadingStyled>
          <SectionContentStyled>{skills}</SectionContentStyled>
          <SectionHeadingStyled uppercase={uppercaseHeading}>
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

const HeaderStyled = styled.div`
  height: 160px;
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 0 32px;
`

type Title = {
  uppercase: boolean
}

const TitleStyled = styled.div<Title>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.uppercase && "text-transform: uppercase;"};
`

const FullNameStyled = styled.div`
  font-size: 32px;
  font-weight: 700;
`

const SubtitleStyled = styled.div`
  font-size: 18px;
  font-style: italic;
  margin-top: 10px;
`

const ContactStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;

  div {
    margin-top: 5px;

    &:first-child {
      margin: 0;
    }
  }
`

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 0 32px;
`

export default Minimal2
