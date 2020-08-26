import React from "react"

import { useFormContext } from "../../../contexts/form-context"
import { FormWrapperStyled } from "../../../styled/resumeBuilderStyles"
import { useFocus } from "../../../hooks/use-focus"

const Skills = () => {
  const { skills, setSkills } = useFormContext()
  const { ref } = useFocus()

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setSkills(e.target.value)
  }

  return (
    <>
      <FormWrapperStyled mb={false}>
        <div>
          <textarea
            ref={ref}
            name={"skills"}
            value={skills}
            onChange={handleInputChange}
            placeholder={"Describe your skills"}
          ></textarea>
        </div>
      </FormWrapperStyled>
    </>
  )
}

export default Skills
