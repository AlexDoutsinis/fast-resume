import React from "react"
import Wrapper from "react-modal"

import {
  RotateIconWrapperStyled,
  RotateIconStyled,
} from "../../styled/templatesStyles"
import { useViewport } from "../../hooks/use-viewport"

type Props = {
  isModalOpen: boolean
  closeModal: () => void
  currentTemplate: string
  wobble: number
  stopWobble: () => void
}

Wrapper.setAppElement("#___gatsby")

const Modal: React.FC<Props> = props => {
  const {
    children,
    isModalOpen,
    closeModal,
    currentTemplate,
    wobble,
    stopWobble,
  } = props

  const { width } = useViewport()
  const deviceSize = 768

  return (
    <Wrapper
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={currentTemplate}
    >
      {children}
      {width <= deviceSize && (
        <RotateIconWrapperStyled>
          <RotateIconStyled onAnimationEnd={stopWobble} wobble={wobble} />
          {wobble ? <p>Please rotate your device</p> : null}
        </RotateIconWrapperStyled>
      )}
    </Wrapper>
  )
}

export default Modal
