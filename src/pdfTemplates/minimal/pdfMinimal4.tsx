import React from 'react'
import { Text } from '@react-pdf/renderer'
import styled from '@react-pdf/styled-components'

import { PropTypes } from '../PropTypes'
import {
  PageStyled,
  FullNameStyled,
  CurrentPositionStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
} from '../commonStyles'

const PdfMinimal4 = (props: PropTypes) => {
  const {
    profile,
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
        <FullNameStyled noPadding color={color}>
          {profile.fullName}
        </FullNameStyled>
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
        <SectionContentStyled flexItem noMargin lineHeight={lineHeight}>
          {profile.profileSummary}
        </SectionContentStyled>
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          Experience
        </SectionHeadingStyled>
        <FlexChild>
          {experienceList.map((item, index) => (
            <ContainerStyled key={item.id} first={index === 0}>
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
            </ContainerStyled>
          ))}
        </FlexChild>
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          Education
        </SectionHeadingStyled>
        <FlexChild>
          {educationList.map((item, index) => (
            <ContainerStyled key={item.id} first={index === 0}>
              {item.university ? (
                <SectionSubHeadingStyled
                  noMargin
                  lineHeight={lineHeight}
                  fwNormal
                >
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
            </ContainerStyled>
          ))}
        </FlexChild>
      </SectionStyled>
      <SectionStyled>
        <SectionHeadingStyled
          uppercase={uppercaseHeading}
          letterSpacing={letterSpacing}
          color={color}
        >
          Contact
        </SectionHeadingStyled>
        <FlexChild>
          {contactList.map(item => (
            <Text key={item.id}>{item.contactItem}</Text>
          ))}
        </FlexChild>
      </SectionStyled>
    </PageStyled>
  )
}

const FlexChild = styled.View`
  flex: 1;
  flex-wrap: wrap;
`

const ContainerStyled = styled.View`
  margin-top: 16px;
  ${props => props.first && 'margin: 0;'};
`

const HeaderStyled = styled.View`
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
`

const SectionStyled = styled.View`
  flex-direction: row;
  margin-top: 32px;
  ${props => props.first && 'margin: 0;'};
`

const SectionHeadingStyled = styled.Text`
  margin-right: 20px;
  margin-top: -2px;
  font-size: 14px;
  font-weight: bold;
  min-width: 122px;
  max-width: 122px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
  ${props => props.color && `color: ${props.color};`};
`

export default PdfMinimal4
