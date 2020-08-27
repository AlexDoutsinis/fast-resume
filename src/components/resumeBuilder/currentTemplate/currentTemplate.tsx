import React, { useContext } from "react"

import {
  CurrentTemplateBoxStyled,
  CurrentTemplateWrapperStyled,
} from "../../../styled/resumeBuilderStyles"
import Minimal1 from "../designs/minimal-1"
import { CurrentTemplateContext } from "../../templateList/templateList"

const CurrentTemplate = () => {
  const { currentTemplate } = useContext(CurrentTemplateContext)

  return (
    <CurrentTemplateBoxStyled>
      <CurrentTemplateWrapperStyled>
        {currentTemplate === "minimal-1" && <Minimal1 />}
        {currentTemplate === "minimal-2" && <h3>Minimal 2</h3>}
      </CurrentTemplateWrapperStyled>
    </CurrentTemplateBoxStyled>
  )
}

export default CurrentTemplate
