import styled from "styled-components"

import { device } from "../utils/device"

export const FooterStyled = styled.footer`
  margin-top: 2.5rem;
  padding: 1rem 1.5rem;
  text-align: center;

  a {
    color: inherit;
    font-style: italic;
  }

  ${device.tablet`
    padding: 2rem 1.5rem;
  `};
`
