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
}

const FullNameStyled = styled.Text`
  font-size: 24px;
  font-weight: bold;
  ${props => props.sm && 'font-size: 22px;'};
  ${props => props.center && 'text-align: center;'};
  ${props => props.color && `color: ${props.color};`};
`

const CurrentPositionStyled = styled.Text`
  font-size: 16px;
  margin-top: 10px;
  ${props => props.italic && 'font-style: italic;'};
  ${props => props.mt5 && 'margin-top: 5px;'};
  ${props => props.sm && 'font-size: 14px;'};
  ${props => props.bold && 'font-weight: bold;'};
`

const MainStyled = styled.View`
  flex-direction: row;
  padding: 0 50px;
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
    props.underline &&
    'padding-bottom: 5px; border-bottom: solid var(--font-color) 1px;'};
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
  ${props => props.lineHeight && `line-height: ${props.lineHeight};`};
`

const SectionSubHeadingStyled = styled.Text`
  font-size: 13px;
  margin-top: 16px;
  ${props =>
    props.sm && 'font-size: 12px; font-style: italic; margin-top: 5px;'};
  ${props => props.noMargin && 'margin: 0;'};
  ${props => props.lineHeight && `line-height: ${props.lineHeight};`};
`

const PageStyled = styled.Page`
  width: 595px;
  min-height: 842px;
  font-size: 12px;
  line-height: 1.3;
  ${props => props.font && `font-family: '${props.font}';`};
`

// ${props => props.font && `font-family: '${props.font}';`};
