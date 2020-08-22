import React from "react"

import {
  CurrentTemplateStyled,
  TemplateDesignWrapperStyled,
} from "../../../styled/resumeBuilderStyles"
import Minimal1 from "../designs/minimal-1"

const CurrentTemplate = () => {
  return (
    <CurrentTemplateStyled>
      <TemplateDesignWrapperStyled>
        <Minimal1 />
      </TemplateDesignWrapperStyled>
    </CurrentTemplateStyled>
  )
}

export default CurrentTemplate
