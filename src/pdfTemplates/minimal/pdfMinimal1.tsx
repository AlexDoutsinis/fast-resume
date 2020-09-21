import React from 'react'
import { View, Text } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'

import { PropTypes } from '../PropTypes'
import {
  FullNameStyled,
  MainStyled,
  SideStyled,
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  PageStyled,
  BoxStyled,
  CurrentPositionStyled,
} from '../commonStyles'

const PdfMinimal1 = (props: PropTypes) => {
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
      <HeaderStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
        <FullNameStyled color={color} noPadding>
          {profile.fullName}
        </FullNameStyled>
        <CurrentPositionStyled>{profile.currentPosition}</CurrentPositionStyled>
      </HeaderStyled>
      <MainStyled>
        <SideStyled width={'40%'}>
          <SectionHeadingStyled
            first
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Profile
          </SectionHeadingStyled>
          <SectionContentStyled lineHeight={lineHeight}>
            {profile.profileSummary}
          </SectionContentStyled>
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
          <SectionHeadingStyled
            uppercase={uppercaseHeading}
            letterSpacing={letterSpacing}
            color={color}
          >
            Contact
          </SectionHeadingStyled>
          <BoxStyled>
            {contactList.map(item => (
              <Text key={item.id}>{item.contactItem}</Text>
            ))}
          </BoxStyled>
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
            Education
          </SectionHeadingStyled>
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
        </SideStyled>
      </MainStyled>
    </PageStyled>
  )
}

const HeaderStyled = styled.View`
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

export default PdfMinimal1
