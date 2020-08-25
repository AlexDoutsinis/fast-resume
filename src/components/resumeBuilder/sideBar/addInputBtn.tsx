import React from "react"
import styled from "styled-components"
import { device } from "../../../utils/device"

type Props = {
  handleAddInput: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const AddInputBtn = ({ handleAddInput }: Props) => {
  return (
    <ButtonWrapperStyled>
      <ButtonStyled onClick={e => handleAddInput(e)}>Add more</ButtonStyled>
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
