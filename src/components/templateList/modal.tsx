import React from "react"
import Wrapper from "react-modal"

import {
  RotateIconWrapperStyled,
  RotateIconStyled,
} from "../../styled/templateListStyles"
import { useViewport } from "../../hooks/use-viewport"

type Props = {
  isModalOpen: boolean
  closeModal: () => void
  currentTemplate: string
  wobble: number
  stopWobble: () => void
}

Wrapper.setAppElement("#___gatsby")

const customStyles = {
  content: {
    // top: "50%",
    // left: "50%",
    // right: "auto",
    // bottom: "auto",
    // marginRight: "-50%",
    // transform: "translate(-50%, -50%)",

    padding: "10px",
    top: "2%",
    left: "5%",
    right: "5%",
    bottom: "2%",
    border: "none",
  },
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

  const { width } = useViewport()
  const deviceSize = 768

  return (
    <Wrapper
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      contentLabel={currentTemplate}
      style={customStyles}
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