import React from "react"
import styled from "styled-components"
import { device } from "../../../utils/device"

type Props = {
  handleAddBtn: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AddInputBtn = ({ handleAddBtn }: Props) => {
  return (
    <ButtonWrapperStyled>
      <ButtonStyled data-name="item" onClick={e => handleAddBtn(e)}>
        Add more
      </ButtonStyled>
    </ButtonWrapperStyled>
  )
}

const ButtonWrapperStyled = styled.div`
  margin-top: 7px;
  text-align: center;
`

const ButtonStyled = styled.button`
  border: none;
  background: none;
  outline: none;
  padding: 3px 6px;
  color: var(--blue-color);
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  ${device.tablet`
    font-size: 14px;
  `}

  ${device.laptop`
    padding: 6px 10px;
  `}
`

export default AddInputBtn
