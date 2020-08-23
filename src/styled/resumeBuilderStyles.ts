import styled from "styled-components"
import { device } from "../utils/device"

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 1rem;

  ${device.laptop`
    font-size: 1rem;
  `}

  ul {
    flex-basis: 85%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;

    ${device.tablet`
      flex-basis: 60%;
    `}

    ${device.laptopL`
      flex-basis: 50%;
    `}

    ${device.desktop`
      flex-basis: 30%;
    `}
  }

  button {
    background: none;
    padding: 3px 6px;
    margin-left: 7px;
    font-size: inherit;
    border: solid var(--blue-color) 1px;
    display: inline-block;
    align-self: flex-start;
    cursor: pointer;
  }
`

type NavItemStyledProps = {
  selectedNavItem: number
  index: number
}

export const NavItemStyled = styled.li<NavItemStyledProps>`
  padding-left: 5px;
  cursor: pointer;

  ${device.mobileM`
    padding: 4px 8px;
  `}

  ${props =>
    props.selectedNavItem === props.index &&
    "color: var(--blue-color); font-weight: 700;"};
`

export const SideBarStyled = styled.div`
  margin-top: 1rem;
  display: inline-block;
  width: 40%;
  vertical-align: top;
  overflow-y: auto;

  ${device.desktop`
    width: 30%
  `}

  input,
  textarea {
    font-size: 12px;
    line-height: 1.3;
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

export const InputsWrapperStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  input {
    flex-basis: 70%;

    ${device.mobileM`
      flex-basis: 75%;
    `}

    ${device.tablet`
      flex-basis: 85%;
    `}

    ${device.laptop`
      flex-basis: 89%;
    `}

    ${device.laptopL`
      flex-basis: 91%;
    `}

    ${device.desktop`
      flex-basis: 94%;
    `}
  }

  button {
    border: none;
    background: none;
    outline: none;
    flex-basis: 10%;
    padding: 3px 6px;
    color: var(--blue-color);
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;

    ${device.tablet`
      font-size: 14px;
      flex-basis: 6%;
      padding: 3px 6px;
      padding: 6px 10px;
    `}

    ${device.desktop`
      flex-basis: 5%;
    `}
  }
`

export const CurrentTemplateStyled = styled.div`
  width: 55%;
  display: inline-block;
  line-height: 1.3;
  font-size: 12px;
  word-wrap: break-word;
  overflow: auto;
  margin-top: 1rem;
  margin-left: 5%;

  ${device.laptopL`
    width: 60%;
    margin-left: 0;
  `}

  ${device.desktop`
    width: 65%
  `}
`

// Template designs
export const TemplateDesignWrapperStyled = styled.div`
  width: 595px;
  height: 842px;
  margin: auto;
  border: solid var(--blue-color) 0.5px;
`
