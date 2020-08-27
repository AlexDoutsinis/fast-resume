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

const initialState = {
  isModalOpen: false,
  currentTemplate: "",
  wobble: 0,
}

type CurrentTemplate = "minimal-1" | "minimal-2"

type CurrentTemplateContextProps = {
  currentTemplate: CurrentTemplate
}

export const CurrentTemplateContext = createContext(
  {} as CurrentTemplateContextProps
)

const TemplateList: React.FC<{}> = ({ children: ResumeBuilderChildren }) => {
  const { edges } = useTemplates()
  const { state, dispatch } = useTemplateListReducer(initialState)

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
        {edges.map(({ node }) => (
          <Template key={node.name} node={node} openModal={openModal} />
        ))}
      </TemplateStyled>
      <FormContextProvider>
        <Modal {...modalProps}>
          <CurrentTemplateContext.Provider
            value={{ currentTemplate: state.currentTemplate }}
          >
            {ResumeBuilderChildren}
          </CurrentTemplateContext.Provider>
        </Modal>
      </FormContextProvider>
    </TemplateWrapperStyled>
  )
}

export default TemplateList
