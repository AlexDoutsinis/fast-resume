import React from "react"

import { useFormContext } from "../../../contexts/form-context"
import { FormWrapperStyled } from "../../../styled/resumeBuilderStyles"

const Skills = () => {
  const { skills, setSkills } = useFormContext()

  function handleInputChange(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setSkills(e.target.value)
  }

  return (
    <>
      <FormWrapperStyled mb={false}>
        <div>
          <textarea
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
