import styled from 'styled-components'

import { device } from '../utils/device'

export const HeroWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${device.tablet`
    flex-direction: row;
    justify-content: space-between;
  `};
`

export const HeroContentStyled = styled.div`
  h2 {
    font-size: 1.6rem;
    font-weight: 700;

    ${device.mobileL`
      font-size: 1.7rem;
    `};

    ${device.desktop`
      font-size: 2.5rem;
    `};
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.2rem;

    ${device.desktop`
      font-size: 1.4rem;
      margin-top: 2rem;
    `};
  }

  button {
    background-color: var(--dark-blue-color);
    color: white;
    border: 1px solid var(--dark-blue-color);
    border-radius: 5px;
    padding: 0.9em 1.1em;
    margin-top: 2rem;
    cursor: pointer;
    font-size: 14px;

    ${device.desktop`
      font-size: 1rem;
      margin-top: 2.5rem;
    `};
  }

  ${device.tablet`
    flex-basis: 300px;
  `};

  ${device.laptopL`
    flex-basis: 420px;
  `};

  ${device.desktop`
    flex-basis: 500px;
  `};
`
