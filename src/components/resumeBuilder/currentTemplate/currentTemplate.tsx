import React from 'react'

import {
  CurrentTemplateBoxStyled,
  CurrentTemplateWrapperStyled,
} from '../../../styled/resumeBuilderStyles'
import { useFormContext } from '../../../contexts/form-context'
import { useResumeBuilderContext } from '../../../contexts/resumeBuilder-context'
import {
  Minimal1,
  Minimal2,
  Minimal3,
  Minimal4,
  Minimal5,
} from '../../resumeTemplates/minimal'

const CurrentTemplate = () => {
  const {
    state: { currentTemplate },
  } = useResumeBuilderContext()
  const { lineHeight, font } = useFormContext()

  return (
    <CurrentTemplateBoxStyled lineHeight={lineHeight} font={font}>
      <CurrentTemplateWrapperStyled>
        {currentTemplate === 'minimal1' && <Minimal1 />}
        {currentTemplate === 'minimal2' && <Minimal2 />}
        {currentTemplate === 'minimal3' && <Minimal3 />}
        {currentTemplate === 'minimal4' && <Minimal4 />}
        {currentTemplate === 'minimal5' && <Minimal5 />}
      </CurrentTemplateWrapperStyled>
    </CurrentTemplateBoxStyled>
  )
}

export default CurrentTemplate
