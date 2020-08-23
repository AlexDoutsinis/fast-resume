import React from "react"
import styled from "styled-components"

const AddInputBtn = () => {
  return (
    <ButtonWrapperStyled>
      <ButtonStyled>Add more</ButtonStyled>
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
  font-weight: 700;
  font-size: 14px;
  cursor: pointer;
`

export default AddInputBtn
