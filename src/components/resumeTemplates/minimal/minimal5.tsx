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
  } = useFormContext()

  return (
    <WrapperStyled>
      <TemplateWrapperStyled>
        <TitleStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
          <FullNameStyled>{profile.fullName}</FullNameStyled>
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
          {profile.profileSummary}
        </SectionContentStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          large
          underline
          mt20
        >
          Experience
        </SectionHeadingStyled>
        <SectionContentStyled mt10>
          {experienceList.map(item => (
            <BoxStyled key={item.id}>
              <SectionSubHeadingStyled noMargin>
                {item.role}
              </SectionSubHeadingStyled>
              <SectionSubHeadingStyled noMargin sm>
                {item.company}
              </SectionSubHeadingStyled>
              <div>{item.description}</div>
            </BoxStyled>
          ))}
        </SectionContentStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          large
          underline
          mt20
        >
          Education
        </SectionHeadingStyled>
        <SectionContentStyled mt10>
          {educationList.map(item => (
            <BoxStyled key={item.id}>
              <SectionSubHeadingStyled noMargin>
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
        </SectionContentStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          large
          underline
          mt20
        >
          Skills
        </SectionHeadingStyled>
        <SectionContentStyled mt10>{skills}</SectionContentStyled>
      </TemplateWrapperStyled>
    </WrapperStyled>
  )
}

const TemplateWrapperStyled = styled.div`
  padding: 0 20px;
  padding-top: 30px;
`

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
