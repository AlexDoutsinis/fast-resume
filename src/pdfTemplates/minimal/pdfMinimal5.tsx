import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'

import { PropTypes } from '../PropTypes'
import {
  PageStyled,
  FullNameStyled,
  CurrentPositionStyled,
  SectionContentStyled,
  SectionHeadingStyled,
  SectionSubHeadingStyled,
  BoxStyled,
} from '../commonStyles'

const PdfMinimal5 = (props: PropTypes) => {
  const {
    profile,
    contactList,
    experienceList,
    educationList,
    skills,
    uppercaseHeading,
    letterSpacing,
    color,
    lineHeight,
    font,
  } = props

  return (
    <PageStyled font={font}>
      <TitleStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
        <FullNameStyled noPadding color={color}>
          {profile.fullName}
        </FullNameStyled>
        <CurrentPositionStyled mt5 sm bold>
          {profile.currentPosition}
        </CurrentPositionStyled>
      </TitleStyled>
      <ContactWrapperStyled>
        {contactList.map(item => (
          <Text key={item.id}>{item.contactItem}</Text>
        ))}
      </ContactWrapperStyled>
      <SectionContentStyled mt10 lineHeight={lineHeight}>
        {profile.profileSummary}
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
          {item.role ? (
            <SectionSubHeadingStyled noMargin lineHeight={lineHeight}>
              {item.role}
            </SectionSubHeadingStyled>
          ) : null}
          {item.company ? (
            <SectionSubHeadingStyled noMargin lineHeight={lineHeight} sm>
              {item.company}
            </SectionSubHeadingStyled>
          ) : null}
          {item.description ? (
            <SectionContentStyled noMargin lineHeight={lineHeight}>
              {item.description}
            </SectionContentStyled>
          ) : null}
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
      <SectionContentStyled lineHeight={lineHeight}>
        {skills}
      </SectionContentStyled>
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
          {item.university ? (
            <SectionSubHeadingStyled noMargin lineHeight={lineHeight} fwNormal>
              {item.university}
            </SectionSubHeadingStyled>
          ) : null}
          {item.specialize ? (
            <SectionSubHeadingStyled noMargin lineHeight={lineHeight} sm>
              {item.specialize}
            </SectionSubHeadingStyled>
          ) : null}
          {item.website ? (
            <SectionSubHeadingStyled noMargin lineHeight={lineHeight} sm>
              {item.website}
            </SectionSubHeadingStyled>
          ) : null}
        </BoxStyled>
      ))}
    </PageStyled>
  )
}

const TitleStyled = styled.View`
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

const ContactWrapperStyled = styled.View`
  margin-top: 5px;
`

export default PdfMinimal5
