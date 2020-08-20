import styled from "styled-components"

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  justify-content: space-between;

  ul {
    flex-basis: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      padding-left: 5px;
    }
  }

  button {
    background: none;
    padding: 3px 6px;
    margin-left: 7px;
    font-size: inherit;
    border: solid var(--blue-color) 1px;
    display: inline-block;
    align-self: flex-start;
  }
`
