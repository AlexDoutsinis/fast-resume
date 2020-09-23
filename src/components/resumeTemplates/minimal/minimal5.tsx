import React from 'react'
import styled from 'styled-components'

import { useFormContext } from '../../../contexts/form-context'
import {
  BoxStyled,
  CurrentPositionStyled,
  FullNameStyled,
  SectionContentStyled,
  SectionHeadingStyled,
  SectionSubHeadingStyled,
  WrapperStyled,
} from '../commonStyles'

const Minimal5 = () => {
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
      <TitleStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
        <FullNameStyled color={color}>{profile.fullName}</FullNameStyled>
        <CurrentPositionStyled mt5 sm bold>
          {profile.currentPosition}
        </CurrentPositionStyled>
      </TitleStyled>
      <ContactWrapperStyled>
        {contactList.map(item => (
          <div key={item.id}>{item.contactItem}</div>
        ))}
      </ContactWrapperStyled>
      <SectionContentStyled mt10>
        {profile.profileSummary.split('\n').map((item, index) => (
          <span key={index}>
            {item}
            <br />
          </span>
        ))}
      </SectionContentStyled>
      <SectionHeadingStyled
        uppercase={uppercaseHeading}
        letterSpacing={letterSpacing}
        large
        underline
        mt20
        color={color}
      >
        Experience
      </SectionHeadingStyled>
      {experienceList.map(item => (
        <BoxStyled key={item.id}>
          <SectionSubHeadingStyled noMargin>
            {item.role}
          </SectionSubHeadingStyled>
          <SectionSubHeadingStyled noMargin sm>
            {item.company}
          </SectionSubHeadingStyled>
          <div>
            {item.description.split('\n').map((item, index) => (
              <span key={index}>
                {item}
                <br />
              </span>
            ))}
          </div>
        </BoxStyled>
      ))}
      <SectionHeadingStyled
        uppercase={uppercaseHeading}
        letterSpacing={letterSpacing}
        large
        underline
        mt20
        color={color}
      >
        Education
      </SectionHeadingStyled>
      {educationList.map(item => (
        <BoxStyled key={item.id}>
          <SectionSubHeadingStyled noMargin fwNormal>
            {item.university}
          </SectionSubHeadingStyled>
          <SectionSubHeadingStyled noMargin sm>
            {item.specialize}
          </SectionSubHeadingStyled>
          <SectionSubHeadingStyled noMargin sm>
            {item.website}
          </SectionSubHeadingStyled>
        </BoxStyled>
      ))}
      <SectionHeadingStyled
        uppercase={uppercaseHeading}
        letterSpacing={letterSpacing}
        large
        underline
        mt20
        color={color}
      >
        Skills
      </SectionHeadingStyled>
      <SectionContentStyled>
        {skills.split('\n').map((item, index) => (
          <span key={index}>
            {item}
            <br />
          </span>
        ))}
      </SectionContentStyled>
    </WrapperStyled>
  )
}

type Title = {
  uppercase: boolean
  letterSpacing: number
}

const TitleStyled = styled.div<Title>`
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

const ContactWrapperStyled = styled.div`
  margin-top: 5px;
`

export default Minimal5
