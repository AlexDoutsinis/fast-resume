import styled from "styled-components"

import { device } from "../utils/device"

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
  ${device.mobileL`
    margin-top: .5rem;
  `};

  ${device.tablet`
    margin-top: 1rem;
    flex-basis: 300px;
    margin-bottom: 1.5rem;
  `};

  h2 {
    font-size: 1.7rem;
    font-weight: 700;
  }

  p {
    margin-top: 1.5rem;
    font-size: 1.1rem;
    font-weight: 300;
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
  }

  ${device.laptop`
    flex-basis: 350px;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.2rem;
    }
  `};
`

export const HeroIllustrationStyled = styled.div`
  margin-top: 2.5rem;

  ${device.tablet`
    max-width: 350px;
    margin: 0;
  `};

  ${device.laptop`
    max-width: 400px;
  `};
`
