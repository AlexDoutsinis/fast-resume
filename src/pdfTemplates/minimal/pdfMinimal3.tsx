import React from 'react'
import { View } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'

import { PropTypes } from '../PropTypes'
import {
  PageStyled,
  FullNameStyled,
  CurrentPositionStyled,
  MainStyled,
  SideStyled,
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  ContactItemStyled,
} from '../commonStyles'

const PdfMinimal3 = (props: PropTypes) => {
  const {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
    letterSpacing,
    color,
    lineHeight,
    font,
  } = props

  return (
    <PageStyled font={font}>
      <MainStyled>
        <SideStyled width={'40%'}>
          <TitleStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
          >
            <FullNameStyled noPadding sm center color={color}>
              {profile.fullName}
            </FullNameStyled>
            <CurrentPositionStyled center mt5 sm italic>
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
          <SectionContentStyled lineHeight={lineHeight}>
            {profile.profileSummary}
          </SectionContentStyled>
          <ContactStyled>
            {contactList.map(item => (
              <ContactItemStyled key={item.id}>
                {item.contactItem}
              </ContactItemStyled>
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
              <View key={item.id}>
                {item.university ? (
                  <SectionSubHeadingStyled lineHeight={lineHeight}>
                    {item.university}
                  </SectionSubHeadingStyled>
                ) : null}
                {item.specialize ? (
                  <SectionSubHeadingStyled lineHeight={lineHeight} sm>
                    {item.specialize}
                  </SectionSubHeadingStyled>
                ) : null}
                {item.website ? (
                  <SectionSubHeadingStyled lineHeight={lineHeight} sm>
                    {item.website}
                  </SectionSubHeadingStyled>
                ) : null}
              </View>
            ))}
          </EducationStyled>
        </SideStyled>
        <SideStyled pl width={'60%'}>
          <SectionHeadingStyled
            first
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Experience
          </SectionHeadingStyled>
          {experienceList.map(item => (
            <View key={item.id}>
              {item.role ? (
                <SectionSubHeadingStyled lineHeight={lineHeight}>
                  {item.role}
                </SectionSubHeadingStyled>
              ) : null}
              {item.company ? (
                <SectionSubHeadingStyled lineHeight={lineHeight} sm>
                  {item.company}
                </SectionSubHeadingStyled>
              ) : null}
              {item.description ? (
                <SectionContentStyled lineHeight={lineHeight}>
                  {item.description}
                </SectionContentStyled>
              ) : null}
            </View>
          ))}
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Skills
          </SectionHeadingStyled>
          <SectionContentStyled lineHeight={lineHeight}>
            {skills}
          </SectionContentStyled>
        </SideStyled>
      </MainStyled>
    </PageStyled>
  )
}

const TitleStyled = styled.View`
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-top: 20px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

const ContactStyled = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;
  ${props => !props.isEmpty && 'margin-top: 32px;'};
`

const EducationStyled = styled.View`
  flex-direction: column;
  align-items: center;
`

export default PdfMinimal3
