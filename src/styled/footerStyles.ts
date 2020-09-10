import styled from "styled-components"

import { device } from "../utils/device"

export const FooterStyled = styled.footer`
  margin-top: 2.5rem;
  padding: 1rem 1.5rem;
  text-align: center;
  background-color: var(--dark-blue-color);
  color: white;

  a {
    color: inherit;
    font-style: italic;
  }

  ${device.mobileL`
    padding: 1.5rem 1.5rem;
    padding-bottom: 2rem;
  `};

  ${device.tablet`
    padding: 2.5rem 1.5rem;
  `};

  ${device.laptop`
    padding: 3rem 1.5rem;
  `};

  ${device.laptopL`
    padding-top: 4rem;
  `};
`
