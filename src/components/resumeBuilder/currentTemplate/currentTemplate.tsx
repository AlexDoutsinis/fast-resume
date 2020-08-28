import React, { useContext } from "react"

import {
  CurrentTemplateBoxStyled,
  CurrentTemplateWrapperStyled,
} from "../../../styled/resumeBuilderStyles"
import Minimal1 from "../designs/minimal-1"
import { CurrentTemplateContext } from "../../templateList/templateList"
import { useFormContext } from "../../../contexts/form-context"

const CurrentTemplate = () => {
  const { currentTemplate } = useContext(CurrentTemplateContext)
  const { lineHeight } = useFormContext()

  return (
    <CurrentTemplateBoxStyled lineHeight={lineHeight}>
      <CurrentTemplateWrapperStyled>
        {currentTemplate === "minimal-1" && <Minimal1 />}
        {currentTemplate === "minimal-2" && <h3>Minimal 2</h3>}
      </CurrentTemplateWrapperStyled>
    </CurrentTemplateBoxStyled>
  )
}

export default CurrentTemplate
