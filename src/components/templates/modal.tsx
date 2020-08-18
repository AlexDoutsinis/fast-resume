import React from "react"
import Wrapper from "react-modal"

import {
  RotateIconWrapperStyled,
  RotateIconStyled,
} from "../../styled/templatesStyles"

type Props = {
  isModalOpen: boolean
  closeModal: () => void
  currentTemplate: string
  wobble: boolean
  stopWobble: () => void
}

const Modal: React.FC<Props> = props => {
  const {
    children,
    isModalOpen,
    closeModal,
    currentTemplate,
    wobble,
    stopWobble,
  } = props

  return (
    <Wrapper
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={currentTemplate}
    >
      {children}
      <RotateIconWrapperStyled>
        <RotateIconStyled onAnimationEnd={stopWobble} wobble={wobble} />
      </RotateIconWrapperStyled>
    </Wrapper>
  )
}

export default Modal
