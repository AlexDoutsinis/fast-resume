import styled from 'styled-components'

import { device } from '../utils/device'

export const FooterStyled = styled.footer`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--dark-blue-color);
  color: white;
  font-size: 14px;
  min-height: 13vh;

  div span,
  div a {
    color: inherit;
  }

  div a {
    font-style: italic;
  }

  div a:hover {
    text-decoration: underline;
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
