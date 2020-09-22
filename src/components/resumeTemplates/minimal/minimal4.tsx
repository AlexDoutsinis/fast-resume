import React from 'react'
import styled from 'styled-components'

import {
  BoxStyled,
  CurrentPositionStyled,
  FullNameStyled,
  SectionSubHeadingStyled,
  WrapperStyled,
} from '../commonStyles'
import { useFormContext } from '../../../contexts/form-context'

const Minimal4 = () => {
  const {
    profile,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
    letterSpacing,
    color,
  } = useFormContext()

  return (
    <WrapperStyled>
      <HeaderStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
        <FullNameStyled color={color}>{profile.fullName}</FullNameStyled>
        <CurrentPositionStyled mt5 italic>
          {profile.currentPosition}
        </CurrentPositionStyled>
      </HeaderStyled>
      <SectionStyled first>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          About Me
        </SectionHeadingStyled>
        <div>
          {profile.profileSummary.split('\n').map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </div>
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          Experience
        </SectionHeadingStyled>
        <div>
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
        </div>
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          Education
        </SectionHeadingStyled>
        <div>
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
        </div>
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          Contact
        </SectionHeadingStyled>
        <div>
          {contactList.map(item => (
            <div key={item.id}>{item.contactItem}</div>
          ))}
        </div>
      </SectionStyled>
    </WrapperStyled>
  )
}

type Title = {
  uppercase: boolean
  letterSpacing: number
}

const HeaderStyled = styled.div<Title>`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

type Section = {
  first?: boolean
}

const SectionStyled = styled.div<Section>`
  display: flex;
  flex-direction: row;
  margin-top: 32px;
  ${props => props.first && 'margin: 0;'};
`

type SectionHeadingStyledProps = {
  uppercase: boolean
  letterSpacing: number
  color: string
}

const SectionHeadingStyled = styled.div<SectionHeadingStyledProps>`
  margin-right: 20px;
  margin-top: -2px;
  font-size: 14px;
  font-weight: 700;
  min-width: 122px;
  max-width: 122px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
  ${props => props.color && `color: ${props.color};`};
`

export default Minimal4
