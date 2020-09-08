import React from "react"

import {
  CurrentTemplateBoxStyled,
  CurrentTemplateWrapperStyled,
} from "../../../styled/resumeBuilderStyles"
import { useFormContext } from "../../../contexts/form-context"
import { useTemplateListContext } from "../../../contexts/templateList-context"
import {
  Minimal1,
  Minimal2,
  Minimal3,
  Minimal4,
} from "../../resumeTemplates/minimal"

const CurrentTemplate = () => {
  const {
    state: { currentTemplate },
  } = useTemplateListContext()
  const { lineHeight } = useFormContext()

  return (
    <CurrentTemplateBoxStyled lineHeight={lineHeight}>
      <CurrentTemplateWrapperStyled>
        {currentTemplate === "minimal-1" && <Minimal1 />}
        {currentTemplate === "minimal-2" && <Minimal2 />}
        {currentTemplate === "minimal-3" && <Minimal3 />}
        {currentTemplate === "minimal-4" && <Minimal4 />}
      </CurrentTemplateWrapperStyled>
    </CurrentTemplateBoxStyled>
  )
}

export default CurrentTemplate
