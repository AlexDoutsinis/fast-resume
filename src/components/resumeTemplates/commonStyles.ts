import styled from 'styled-components'

export {
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  SideStyled,
}

type SectionHeadingStyledProps = {
  first?: boolean
  center?: boolean
  uppercase: boolean
  letterSpacing: number
}

const SectionHeadingStyled = styled.div<SectionHeadingStyledProps>`
  font-size: 14px;
  font-weight: 700;
  margin-top: 32px;
  ${props => props.uppercase && 'text-transform: uppercase;'};
  ${props =>
    props.letterSpacing && `letter-spacing: ${props.letterSpacing}px;`};

  ${props => props.first && 'margin: 0;'};
  ${props => props.center && 'text-align: center;'};
`

const SectionContentStyled = styled.div`
  margin-top: 16px;
`

type SectionSubHeadingStyledProps = {
  sm?: boolean
  noMargin?: boolean
}

const SectionSubHeadingStyled = styled.div<SectionSubHeadingStyledProps>`
  font-size: 14px;
  margin-top: 16px;
  ${props =>
    props.sm && 'font-size: 13px; font-style: italic; margin-top: 12px;'};
  ${props => props.noMargin && 'margin: 0;'};
`

type SideStyledProps = {
  pr?: boolean
  pl?: boolean
}

const SideStyled = styled.div<SideStyledProps>`
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  ${props => props.pr && 'padding-right: 40px;'};
  ${props => props.pl && 'padding-left: 40px;'};
`
