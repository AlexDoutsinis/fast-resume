import React, { useContext } from "react"

import {
  CurrentTemplateStyled,
  TemplateDesignWrapperStyled,
} from "../../../styled/resumeBuilderStyles"
import Minimal1 from "../designs/minimal-1"
import { CurrentTemplateContext } from "../../templateList/templateList"

const CurrentTemplate = () => {
  const { currentTemplate } = useContext(CurrentTemplateContext)

  return (
    <CurrentTemplateStyled>
      <TemplateDesignWrapperStyled>
        {currentTemplate === "minimal-1" && <Minimal1 />}
        {currentTemplate === "minimal-2" && <h3>Minimal 2</h3>}
      </TemplateDesignWrapperStyled>
    </CurrentTemplateStyled>
  )
}

export default CurrentTemplate
