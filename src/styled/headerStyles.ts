import styled from "styled-components"

import { device } from "../utils/device"

export const HeaderStyled = styled.header`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
  padding-left: 1.5rem;
  border-bottom: 0.2px solid transparent;
  box-shadow: 0px 0.2px 5px 0px var(--font-color);

  h1 {
    a {
      font-size: 1.3rem;
      font-weight: 700;
      color: inherit;
    }
  }

  ${device.mobileL`
    padding-left: 2.5rem;
  `}
`
