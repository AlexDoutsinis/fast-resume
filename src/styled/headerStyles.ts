import styled from "styled-components"

export const HeaderStyled = styled.header`
  padding-top: 1rem;
  height: var(--header-height);
  padding-left: 1.5rem;
  background-color: white;
  border-bottom: 0.2px solid transparent;
  box-shadow: 0px 0.2px 5px 0px var(--font-color);

  h1 {
    a {
      text-align: left;
      font-size: 1.3rem;
      font-weight: 700;
      color: inherit;
    }
  }
`
