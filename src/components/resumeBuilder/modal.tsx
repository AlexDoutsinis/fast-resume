import React from 'react'
import Wrapper from 'react-modal'

import {
  RotateIconWrapperStyled,
  RotateIconStyled,
} from '../../styled/resumeBuilderStyles'
import { useViewport } from '../../hooks/use-viewport'
import { useResumeBuilderContext } from '../../contexts/resumeBuilder-context'

Wrapper.setAppElement('#___gatsby')

const customStyles = {
  overlay: {
    backgroundColor: 'rgba(187,225,250, 0.30)',
  },
  content: {
    padding: '10px',
    top: '2%',
    left: '5%',
    right: '5%',
    bottom: '2%',
    border: 'none',
  },
}

const Modal: React.FC<{}> = ({children}) => {
  const { state, dispatch } = useResumeBuilderContext()

  function closeModal(): void {
    dispatch({ type: 'closeModal_stopWobble' })
  }

  function stopWobble(): void {
    dispatch({ type: 'stopWobble' })
  }

  const { width } = useViewport()
  const deviceSize: number = 768

  return (
    <Wrapper
      isOpen={state.isModalOpen}
      onRequestClose={closeModal}
      contentLabel={state.currentTemplate}
      style={customStyles}
    >
      {children}

      {width < deviceSize && (
        <RotateIconWrapperStyled>
          <RotateIconStyled onAnimationEnd={stopWobble} wobble={state.wobble} />
          {state.wobble ? <p>Please rotate your device</p> : null}
        </RotateIconWrapperStyled>
      )}
    </Wrapper>
  )
}

export default Modal
