import React from 'react'

import { useFormContext } from '../../../contexts/form-context'
import { FormWrapperStyled } from '../../../styled/resumeBuilderStyles'
import { useFocus } from '../../../hooks/use-focus'

const Skills = () => {
  const { skills, setSkills } = useFormContext()
  const { ref } = useFocus()

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>): void {
    setSkills(e.target.value)
    if (typeof window !== 'undefined')
      localStorage.setItem('skills', e.target.value)
  }

  return (
    <>
      <FormWrapperStyled mb={false}>
        <div>
          <textarea
            ref={ref}
            name={'skills'}
            value={skills}
            onChange={handleInputChange}
            placeholder={'Tell us about your skills'}
          ></textarea>
        </div>
      </FormWrapperStyled>
    </>
  )
}

export default Skills
