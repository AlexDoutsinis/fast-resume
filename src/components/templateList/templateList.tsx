import React from "react"

import {
  TemplateWrapperStyled,
  TemplateStyled,
} from "../../styled/templateListStyles"
import { useTemplates } from "../../hooks/use-templates"
import Template from "./template"
import Modal from "./modal"
import { FormContextProvider } from "../../contexts/form-context"
import { useTemplateListContext } from "../../contexts/templateList-context"

const TemplateList: React.FC<{}> = ({ children: ResumeBuilder }) => {
  const { edges: templates } = useTemplates()
  const { state, dispatch } = useTemplateListContext()

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
      <TemplateStyled>
        {templates.map(({ node }) => (
          <Template key={node.name} node={node} openModal={openModal} />
        ))}
      </TemplateStyled>
      <FormContextProvider>
        <Modal {...modalProps}>{ResumeBuilder}</Modal>
      </FormContextProvider>
    </TemplateWrapperStyled>
  )
}

export default TemplateList
