import React, { useReducer } from "react"
import Modal from "react-modal"

import { TemplateWrapperStyled } from "../../styled/templatesStyles"
import { useTemplates } from "../../hooks/use-templates"
import Template from "./template"
import { templatesReducer } from "../../reducers/templatesReducer"

const initialState = {
  isModalOpen: false,
  currentTemplate: null,
}

const Templates: React.FC<{}> = ({ children }) => {
  const { edges } = useTemplates()

  const [state, dispatch] = useReducer(templatesReducer, initialState)

  function openModal(templateName) {
    dispatch({ type: "openModal", templateName })
  }

  function closeModal() {
    dispatch({ type: "closeModal" })
  }

  return (
    <TemplateWrapperStyled>
      <h3>{children}</h3>
      <div>
        {edges.map(({ node }) => (
          <Template key={node.name} node={node} />
        ))}
      </div>
      <Modal
        isOpen={state.isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
      >
        <h2></h2>
      </Modal>
    </TemplateWrapperStyled>
  )
}

export default Templates
