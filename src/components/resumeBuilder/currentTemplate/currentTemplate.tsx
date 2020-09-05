import React from "react"

import {
  CurrentTemplateBoxStyled,
  CurrentTemplateWrapperStyled,
} from "../../../styled/resumeBuilderStyles"
import { useFormContext } from "../../../contexts/form-context"
import Minimal1 from "../../resumeTemplates/minimal1"
import Minimal2 from "../../resumeTemplates/minimal2"
import { useTemplateListContext } from "../../../contexts/templateList-context"
import Minimal3 from "../../resumeTemplates/minimal3"

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
      </CurrentTemplateWrapperStyled>
    </CurrentTemplateBoxStyled>
  )
}

export default CurrentTemplate
