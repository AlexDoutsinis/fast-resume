import React from "react"
import styled from "styled-components"

import { useFormContext } from "../../../contexts/form-context"
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
  } = useFormContext()

  return (
    <>
      <HeaderStyled>
        <TitleStyled>
          <FullNameStyled>{profile.fullName}</FullNameStyled>
          <SubtitleStyled>{profile.subtitle}</SubtitleStyled>
        </TitleStyled>
        <ContactStyled>
          {contactList.map(item => (
            <div>{item.contactItem}</div>
          ))}
        </ContactStyled>
      </HeaderStyled>
      <MainStyled>
        <SideStyled pr>
          <SectionHeadingStyled first>Profile</SectionHeadingStyled>
          <SectionContentStyled>{profile.profileSummary}</SectionContentStyled>
          <SectionHeadingStyled>Experience</SectionHeadingStyled>
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
          <SectionHeadingStyled first>Skills</SectionHeadingStyled>
          <SectionContentStyled>{skills}</SectionContentStyled>
          <SectionHeadingStyled>Education</SectionHeadingStyled>
          {educationList.map(item => (
            <div>
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
  height: 20%;
  display: grid;
  grid-template-columns: 60% 40%;
  padding: 0 32px;
`

const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const FullNameStyled = styled.div`
  font-size: 34px;
  font-weight: 700;
`

const SubtitleStyled = styled.div`
  font-size: 20px;
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
