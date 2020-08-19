import React, { useReducer } from "react"

import { TemplateWrapperStyled } from "../../styled/templatesStyles"
import { useTemplates } from "../../hooks/use-templates"
import Template from "./template"
import { templatesReducer } from "../../reducers/templatesReducer"
import Modal from "./modal"
import Navbar from "../resumeBuilder/navbar"

const initialState = {
  isModalOpen: false,
  currentTemplate: "",
  wobble: 0,
}

const TemplateList: React.FC<{}> = ({ children }) => {
  const { edges } = useTemplates()
  const [state, dispatch] = useReducer(templatesReducer, initialState)

  function openModal(templateName: string): void {
    dispatch({ type: "openModal_startWobble", templateName })
  }

  function closeModal(): void {
    dispatch({ type: "closeModal_stopWobble" })
  }

  const modalProps = {
    isModalOpen: state.isModalOpen,
    closeModal: closeModal,
    currentTemplate: state.currentTemplate,
    wobble: state.wobble,
    stopWobble: () => dispatch({ type: "stopWobble" }),
  }

  return (
    <TemplateWrapperStyled>
      <h3>{children}</h3>
      <div>
        {edges.map(({ node }) => (
          <Template key={node.name} node={node} openModal={openModal} />
        ))}
      </div>
      <Modal {...modalProps}>
        <Navbar />
      </Modal>
    </TemplateWrapperStyled>
  )
}

export default TemplateList
