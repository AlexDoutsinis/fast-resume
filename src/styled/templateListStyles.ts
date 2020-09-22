import styled from 'styled-components'

import { device } from '../utils/device'

export const TemplateWrapperStyled = styled.div`
  h3 {
    margin-bottom: 2rem;
    text-align: center;
    font-size: 1.3rem;
    font-weight: 700;

    ${device.mobileL`
      font-size: 1.4rem;
    `}

    ${device.tablet`
      margin-bottom: 2.5rem;
    `};

    ${device.laptop`
      margin-bottom: 3.5rem;
    `};

    ${device.desktop`
      font-size: 2rem;
      margin-bottom: 4.5rem;
    `};
  }
`

export const TemplateStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 80px);
  grid-gap: 1rem;
  overflow: auto;

  img {
    border: solid 1.5px var(--blue-color);
    cursor: pointer;
    border-radius: 5px;
  }

  ${device.tablet`
     grid-template-columns: repeat(5, 100px);
     justify-content: center;
     column-gap: 2rem;
  `};

  ${device.laptop`
     grid-template-columns: repeat(5, 120px);
     column-gap: 2rem;
  `};

  ${device.desktop`
     grid-template-columns: repeat(5, 150px);
     column-gap: 2.5rem;
  `};
`
