import styled from "styled-components"

import { device } from "../utils/device"

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1.2rem 0;
  padding-left: 7.5%;
  border-bottom: 0.2px solid transparent;
  box-shadow: 0px 0.2px 5px 0px var(--font-color);
  min-height: 7vh;

  h1 {
    a {
      font-size: 1.3rem;
      font-weight: 700;
      color: inherit;
    }
  }

  ${device.tablet`
    padding-left: 5%;
  `}

  ${device.laptop`
    padding: 1.5rem 0;
    padding-left: 5%;
  `};

  ${device.laptopL`
    padding-top: 2rem;
    padding-bottom: 2rem;
    padding-left: 3rem;
  `};
`
