import React from 'react'
import { View, Text } from '@react-pdf/renderer'
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
} from '../commonStyles'

const PdfMinimal2 = (props: PropTypes) => {
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
      <HeaderStyled>
        <TitleStyled uppercase={uppercaseHeading} letterSpacing={letterSpacing}>
          <FullNameStyled color={color}>{profile.fullName}</FullNameStyled>
          <CurrentPositionStyled italic>
            {profile.currentPosition}
          </CurrentPositionStyled>
        </TitleStyled>
        <ContactStyled>
          {contactList.map(item => (
            <ContactItemStyled key={item.id}>
              {item.contactItem}
            </ContactItemStyled>
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
          <SectionContentStyled lineHeight={lineHeight}>
            {profile.profileSummary}
          </SectionContentStyled>
          <SectionHeadingStyled
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
          <SectionContentStyled lineHeight={lineHeight}>
            {skills}
          </SectionContentStyled>
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
  flex-direction: row;
  margin-bottom: 32px;
`

const TitleStyled = styled.View`
  width: 60%;
  flex-direction: column;
  justify-content: center;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

const ContactStyled = styled.View`
  width: 40%;
  flex-direction: column;
  justify-content: center;
  padding-left: 32px;
`

const ContactItemStyled = styled.Text`
  margin-top: 5px;

  &:first-child {
    margin: 0;
  }
`

export default PdfMinimal2
