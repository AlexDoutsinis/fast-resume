import React from 'react'
import styled from 'styled-components'

import {
  SideStyled,
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  CurrentPositionStyled,
  FullNameStyled,
} from '../commonStyles'
import { useFormContext } from '../../../contexts/form-context'

const Minimal3 = () => {
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

  const isContactListEmpty = contactList.reduce((isEmpty, value) => {
    return value.contactItem !== '' ? false : isEmpty
  }, true)

  return (
    <WrapperStyled>
      <SideStyled>
        <TitleStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
          <FullNameStyled sm center color={color}>
            {profile.fullName}
          </FullNameStyled>
          <CurrentPositionStyled mt5 sm italic>
            {profile.currentPosition}
          </CurrentPositionStyled>
        </TitleStyled>
        <SectionHeadingStyled
          center
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          Profile
        </SectionHeadingStyled>
        <SectionContentStyled>{profile.profileSummary}</SectionContentStyled>
        <ContactStyled isEmpty={isContactListEmpty}>
          {contactList.map(item => (
            <div key={item.id}>{item.contactItem}</div>
          ))}
        </ContactStyled>
        <SectionHeadingStyled
          center
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
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
      <SideStyled pl>
        <SectionHeadingStyled
          first
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          Experience
        </SectionHeadingStyled>
        {experienceList.map(item => (
          <div key={item.id}>
            <SectionSubHeadingStyled>{item.role}</SectionSubHeadingStyled>
            <SectionSubHeadingStyled sm>{item.company}</SectionSubHeadingStyled>
            <SectionContentStyled>{item.description}</SectionContentStyled>
          </div>
        ))}
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
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
  letterSpacing: number
}

const TitleStyled = styled.div<Title>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

// const FullNameStyled = styled.div`
//   font-size: 24px;
//   font-weight: 700;
//   text-align: center;
// `

// const CurrentPositionStyled = styled.div`
//   margin-top: 8px;
//   font-size: 14px;
//   font-style: italic;
// `

type Contact = {
  isEmpty: boolean
}

const ContactStyled = styled.div<Contact>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: auto;
  ${props => !props.isEmpty && 'margin-top: 32px;'};

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
