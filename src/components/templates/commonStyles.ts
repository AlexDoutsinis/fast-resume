import styled from "styled-components"

export {
  SectionHeadingStyled,
  SectionContentStyled,
  SectionSubHeadingStyled,
  SideStyled,
}

type SectionHeadingStyledProps = {
  first?: boolean
}

const SectionHeadingStyled = styled.div<SectionHeadingStyledProps>`
  font-size: 16px;
  font-weight: 700;
  margin-top: 32px;

  ${props => props.first && "margin: 0;"};
`

const SectionContentStyled = styled.div`
  margin-top: 16px;
`

type SectionSubHeadingStyledProps = {
  sm?: boolean
}

const SectionSubHeadingStyled = styled.div<SectionSubHeadingStyledProps>`
  font-size: 14px;
  margin-top: 16px;

  ${props =>
    props.sm && "font-size: 13px; font-style: italic; margin-top: 12px;"};
`

type SideStyledProps = {
  pr?: boolean
}

const SideStyled = styled.div<SideStyledProps>`
  display: flex;
  flex-direction: column;
  padding: 16px 0;

  ${props => (props.pr ? "padding-right: 16px;" : "padding-left: 16px;")};
`
