import styled from "styled-components"

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  justify-content: space-between;
  margin-bottom: 1rem;

  ul {
    flex-basis: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
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

type NavItemStyledProps = {
  selectedNavItem: number
  index: number
}

export const NavItemStyled = styled.li<NavItemStyledProps>`
  padding-left: 5px;
  cursor: pointer;

  ${props => props.selectedNavItem === props.index && "color: red"};
`

export const SideBarStyled = styled.div`
  margin-top: 1rem;
  display: inline-block;
  width: 40%;
  vertical-align: top;

  input,
  textarea {
    font-size: 0.8rem;
    width: 100%;
    padding: 3px 6px;
    outline: none;
    border: solid var(--blue-color) 0.5px;
    margin-bottom: 0.5rem;
  }

  textarea {
    resize: vertical;
    min-width: 100%;
    max-width: 100%;
    min-height: 100px;
    max-height: 200px;
    margin-bottom: 0;
  }
`

export const CurrentTemplateStyled = styled.div`
  width: 60%;
  display: inline-block;
  line-height: 1.3;
  font-size: 12px;
  word-wrap: break-word;
  overflow: auto;
  margin-top: 2rem;
`

// Template designs
export const TemplateDesignWrapperStyled = styled.div`
  width: 595px;
  height: 842px;

  /* border: solid red 1px; */
`
