import styled from "styled-components"

import { device } from "../utils/device"

export const FeaturesWrapperStyled = styled.section`
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--light-blue-color);

  ${device.tablet`
    padding-left: 2.5rem;
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const FeaturesContentStyled = styled.div`
  h2 {
    font-size: 1.2rem;
    font-weight: 700;
  }

  p {
    margin-top: 1.5rem;
  }

  ${device.tablet`
    flex-basis: 300px;
  `}
`

export const FeaturesIllustrationStyled = styled.div`
  margin-top: 2rem;

  ${device.tablet`
    max-width: 350px;
  `};
`
