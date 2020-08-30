import React, { useContext } from "react"

import {
  CurrentTemplateBoxStyled,
  CurrentTemplateWrapperStyled,
} from "../../../styled/resumeBuilderStyles"
import { CurrentTemplateContext } from "../../templateList/templateList"
import { useFormContext } from "../../../contexts/form-context"
import Minimal1 from "../../templates/minimal1"
import Minimal2 from "../../templates/minimal2"

const CurrentTemplate = () => {
  const { currentTemplate } = useContext(CurrentTemplateContext)
  const { lineHeight } = useFormContext()

  return (
    <CurrentTemplateBoxStyled lineHeight={lineHeight}>
      <CurrentTemplateWrapperStyled>
        {currentTemplate === "minimal-1" && <Minimal1 />}
        {currentTemplate === "minimal-2" && <Minimal2 />}
      </CurrentTemplateWrapperStyled>
    </CurrentTemplateBoxStyled>
  )
}

export default CurrentTemplate
