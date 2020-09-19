import React from 'react'
import styled from 'styled-components'

import { useFormContext } from '../../../contexts/form-context'
import {
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  SideStyled,
  FullNameStyled,
  CurrentPositionStyled,
  MainStyled,
  WrapperStyled,
} from '../commonStyles'

const Minimal2 = () => {
  const {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
    letterSpacing,
    color,
  } = useFormContext()

  return (
    <WrapperStyled>
      <HeaderStyled>
        <TitleStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
          <FullNameStyled color={color}>{profile.fullName}</FullNameStyled>
          <CurrentPositionStyled italic>
            {profile.currentPosition}
          </CurrentPositionStyled>
        </TitleStyled>
        <ContactStyled>
          {contactList.map(item => (
            <div key={item.id}>{item.contactItem}</div>
          ))}
        </ContactStyled>
      </HeaderStyled>
      <MainStyled>
        <SideStyled pr width={'60%'}>
          <SectionHeadingStyled
            first
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Profile
          </SectionHeadingStyled>
          <SectionContentStyled>{profile.profileSummary}</SectionContentStyled>
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
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
        </SideStyled>
        <SideStyled width={'40%'}>
          <SectionHeadingStyled
            first
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Skills
          </SectionHeadingStyled>
          <SectionContentStyled>{skills}</SectionContentStyled>
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
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
    </WrapperStyled>
  )
}

const HeaderStyled = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 32px;

  > div {
    &:first-child {
      width: 60%;
    }

    &:last-child {
      width: 40%;
    }
  }
`

type Title = {
  uppercase: boolean
  letterSpacing: number
}

const TitleStyled = styled.div<Title>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
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

export default Minimal2
