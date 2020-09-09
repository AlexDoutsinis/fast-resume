import styled from "styled-components"

import { device } from "../utils/device"

export const FeaturesWrapperStyled = styled.div`
  padding-bottom: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${device.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}

  ${device.laptop`
    justify-content: flex-start;
    margin-top: 1rem;
    margin-left: 4rem;
  `};

  ${device.laptopL`
    margin-left: 5rem;
  `};
`

export const FeaturesContentStyled = styled.div`
  h2 {
    font-size: 1.4rem;
    font-weight: 700;
  }

  p {
    font-size: 1.1rem;
    margin-top: 1.5rem;
  }

  ${device.tablet`
    flex-basis: 300px;
  `}

  ${device.laptopL`
    flex-basis: 420px;
  `}
`

export const FeaturesIllustrationStyled = styled.div`
  margin-top: 2rem;

  ${device.tablet`
    max-width: 350px;
  `};

  ${device.laptop`
    max-width: 400px;
    margin-left: 10rem;
  `};

  ${device.laptopL`
    margin-top: 3rem;
    margin-bottom: 2rem;
    margin-left: 13rem;
    max-width: 600px;
  `}
`
