import styled from '@react-pdf/styled-components'

export {
  PageStyled,
  FullNameStyled,
  CurrentPositionStyled,
  MainStyled,
  SideStyled,
  SectionHeadingStyled,
  BoxStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  ContactItemStyled,
}

const FullNameStyled = styled.Text`
  font-size: 24px;
  font-weight: bold;
  ${props => props.sm && 'font-size: 22px;'};
  ${props => props.center && 'text-align: center;'};
  ${props => props.color && `color: ${props.color};`};
  flex: 1;
  flex-wrap: wrap;
  padding-right: 34px;
  ${props => props.noPadding && 'padding: 0;'};
`

const CurrentPositionStyled = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  flex: 1;
  flex-wrap: wrap;
  ${props => props.italic && 'font-style: italic;'};
  ${props => props.mt5 && 'margin-top: 5px;'};
  ${props => props.sm && 'font-size: 14px;'};
  ${props => props.bold && 'font-weight: bold;'};
  ${props => props.center && 'text-align: center;'};
`

const MainStyled = styled.View`
  flex-direction: row;
`

const SideStyled = styled.View`
  flex-direction: column;
  padding-top: 16px;
  ${props => props.pr && 'padding-right: 40px;'};
  ${props => props.pl && 'padding-left: 40px;'};
  ${props => props.width && `width: ${props.width};`};
`

const SectionHeadingStyled = styled.Text`
  font-size: 14px;
  font-weight: bold;
  margin-top: 32px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};
  ${props => props.first && 'margin: 0;'};
  ${props => props.center && 'text-align: center;'};
  ${props => props.large && 'font-size: 16px;'};
  ${props =>
    props.underline && 'padding-bottom: 5px; border-bottom: 1 solid #1b262c ;'};
  ${props => props.mt20 && 'margin-top: 20px;'};
  ${props =>
    props.color && `color: ${props.color}; border-color: ${props.color};`};
`

const BoxStyled = styled.View`
  margin-top: 16px;
`

const SectionContentStyled = styled.Text`
  margin-top: 16px;
  ${props => props.mt10 && 'margin-top: 10px;'};
  ${props => props.noMargin && 'margin: 0;'};
  ${props => props.lineHeight && `line-height: ${props.lineHeight};`};
  ${props => props.flexItem && 'flex: 1; flex-wrap: wrap;'};
`

const SectionSubHeadingStyled = styled.Text`
  font-size: 12px;
  margin-top: 16px;
  font-weight: bold;
  ${props =>
    props.sm && 'font-style: italic; font-weight: normal; margin-top: 5px;'};
  ${props => props.noMargin && 'margin: 0;'};
  ${props => props.lineHeight && `line-height: ${props.lineHeight};`};
  ${props => props.fwNormal && 'font-weight: normal;'};
`

const PageStyled = styled.Page`
  font-size: 12px;
  line-height: 1.3;
  ${props => props.font && `font-family: '${props.font}';`};
  padding: 32px 50px;
`

const ContactItemStyled = styled.Text`
  margin-top: 5px;
  flex: 1;
  flex-wrap: wrap;

  &:first-child {
    margin: 0;
  }
`
