import styled from "styled-components"
import { IoIosPhonePortrait } from "react-icons/io"

import { device } from "../utils/device"

export const RotateIconWrapperStyled = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  background-color: var(--light-blue-color);
  width: 150px;

  p {
    padding-left: 5px;
    font-size: 0.85rem;
    padding: 0.4rem 1rem;
  }
`

type RotateIconStyledProps = {
  wobble: number
}

export const RotateIconStyled = styled(IoIosPhonePortrait)<
  RotateIconStyledProps
>`
  font-size: 2.5rem;
  color: var(--blue-color);

  ${props => (props.wobble ? `animation: wobble 1s 2` : `display: none`)};
`

export const NavStyled = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 0.8rem;
  justify-content: space-between;
  margin-top: 10px;
  margin-bottom: 1rem;

  ${device.tablet`
    margin-right: 10px;
  `}

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
    margin-left: 10px;
    font-size: inherit;
    border: solid var(--blue-color) 1px;
    display: inline-block;
    cursor: pointer;

    ${device.tablet`
      padding: 3px 6px;
    `}
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

  ${device.tablet`
    padding-left: 8.5px;
  `}

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
    border: solid var(--blue-color) 1px;
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

type FormWrapperStyledProps = {
  mb: boolean
  mb05?: boolean
}

export const FormWrapperStyled = styled.div<FormWrapperStyledProps>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.mb ? "1rem;" : "1.5rem;")};
  ${props => props.mb05 && "margin-bottom: .5rem;"};

  div {
    flex-basis: 60%;
  }

  button {
    flex-basis: 35%;
    border: none;
    background: none;
    outline: none;
    color: var(--blue-color);
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;
    padding: 6px 3px;
  }

  ${device.mobileM`
    div {
      flex-basis: 65%;
    }

    button {
      flex-basis: 30%;
    }
  `};

  ${device.mobileL`
    div {
      flex-basis: 70%;
    }

    button {
      flex-basis: 25%;
    }
  `};

  ${device.tablet`
    div {
      flex-basis: 80%;
    }

    button {
      flex-basis: 15%;
      font-size: 14px;
    }
  `};

  ${device.laptop`
    div {
      flex-basis: 85%;
    }

    button {
      flex-basis: 10%;
    }
  `};

  ${device.laptopL`
    div {
      flex-basis: 90%;
    }

    button {
      flex-basis: 5%;
    }
  `};

  ${device.desktop`
    div {
      flex-basis: 92%;
    }

    button {
      flex-basis: 3%;
    }
  `};
`

type CurrentTemplateBoxStyledProps = {
  lineHeight: number
}

export const CurrentTemplateBoxStyled = styled.div<
  CurrentTemplateBoxStyledProps
>`
  width: 55%;
  display: inline-block;
  ${props => props.lineHeight && `line-height: ${props.lineHeight};`};
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

export const CurrentTemplateWrapperStyled = styled.div`
  width: 595px;
  min-height: 842px;
  margin: auto;
  border: solid var(--blue-color) 1px;
`
