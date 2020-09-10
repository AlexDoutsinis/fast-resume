import styled from "styled-components"

import { device } from "../utils/device"

export const IllustrationStyled = styled.div`
  svg {
    height: auto;
    margin-top: 2.5rem;

    ${device.tablet`
    margin: 0;
    max-width: 320px;
  `};

    ${device.laptop`
    max-width: 400px;
  `};

    ${device.laptopL`
    max-width: 600px;
  `}
  }
`
