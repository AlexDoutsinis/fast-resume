import styled from "styled-components"

export const NavStyled = styled.nav`
  /* width: 100%; */
  display: flex;
  flex-direction: row;
  /* justify-content: center;
  justify-items: center; */

  ul {
    flex-basis: 80%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    li {
      /* border: solid red 1px; */
      /* display: inline-block; */
      /* padding-left: 10px; */

      /* &:first-child {
        padding: 0;
      }

      &:nth-child(4) {
        padding: 0;
      }

      &:last-child {
        padding: 0;
      } */
    }
  }
`
