import styled from 'styled-components'

import { device } from '../utils/device'

export const FeaturesWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${device.tablet`
    flex-direction: row;
    justify-content: space-between;
  `}
`

export const FeaturesContentStyled = styled.div`
  h2 {
    font-size: 1.3rem;
    font-weight: 700;

    ${device.mobileL`
      font-size: 1.4rem;
    `}

    ${device.desktop`
      font-size: 2rem;
    `};

    &:last-of-type {
      margin-top: 1.5rem;

      ${device.desktop`
        margin-top: 2rem;
      `};
    }
  }

  p {
    font-size: 1.1rem;
    margin-top: 1.5rem;

    ${device.desktop`
      margin-top: 2rem;
      font-size: 1.2rem;
    `};
  }

  ${device.tablet`
    flex-basis: 300px;
  `}

  ${device.laptopL`
    flex-basis: 370px;
  `}

  ${device.desktop`
    flex-basis: 420px;
  `}
`
