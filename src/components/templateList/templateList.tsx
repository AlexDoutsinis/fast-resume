import React, { createContext } from "react"

import {
  TemplateWrapperStyled,
  TemplateStyled,
} from "../../styled/templateListStyles"
import { useTemplates } from "../../hooks/use-templates"
import Template from "./template"
import { useTemplateListReducer } from "../../reducers/templateListReducer"
import Modal from "./modal"
import { FormContextProvider } from "../../contexts/form-context"

type CurrentTemplateContextProps = {
  currentTemplate: string
  setCurrentTemplate: (templateName: string) => void
}

export const CurrentTemplateContext = createContext(
  {} as CurrentTemplateContextProps
)

const TemplateList: React.FC<{}> = ({ children: ResumeBuilderChildren }) => {
  const { edges: templates } = useTemplates()
  const { state, dispatch } = useTemplateListReducer()

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

  const contextValue = {
    currentTemplate: state.currentTemplate,
    setCurrentTemplate: (templateName: string) =>
      dispatch({ type: "setCurrentTemplate", templateName }),
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
        <Modal {...modalProps}>
          <CurrentTemplateContext.Provider value={{ ...contextValue }}>
            {ResumeBuilderChildren}
          </CurrentTemplateContext.Provider>
        </Modal>
      </FormContextProvider>
    </TemplateWrapperStyled>
  )
}

export default TemplateList
