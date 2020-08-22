import React, { useReducer } from "react"

import { TemplateWrapperStyled } from "../../styled/templateListStyles"
import { useTemplates } from "../../hooks/use-templates"
import Template from "./template"
import { templatesReducer } from "../../reducers/templateListReducer"
import Modal from "./modal"
import { InputsContextProvider } from "../contexts/Inputs-context"

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
      <h3>Pick a template</h3>
      <div>
        {edges.map(({ node }) => (
          <Template key={node.name} node={node} openModal={openModal} />
        ))}
      </div>
      <InputsContextProvider>
        <Modal {...modalProps}>{children}</Modal>
      </InputsContextProvider>
    </TemplateWrapperStyled>
  )
}

export default TemplateList
