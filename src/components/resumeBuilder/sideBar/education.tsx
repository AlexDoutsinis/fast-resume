import React from "react"

import { useFormContext, EducationList } from "../../contexts/form-context"
import { useHandleForm } from "../../../hooks/use-handleForm"
import { FormWrapperStyled } from "../../../styled/resumeBuilderStyles"
import RemoveInputBtn from "./removeInputBtn"
import AddInputBtn from "./addInputBtn"

const Education = () => {
  const { educationList, setEducationList } = useFormContext()
  const handlers = useHandleForm<EducationList>(educationList, setEducationList)

  const {
    ref,
    handleInputChange,
    handleAddEducation,
    handleRemoveInput,
  } = handlers

  return (
    <>
      {educationList.map((education, index) => {
        const isLastItem = index === educationList.length - 1

        return (
          <FormWrapperStyled key={index} mb={isLastItem}>
            <div>
              <input
                ref={ref}
                name="university"
                value={education.university}
                onChange={e => handleInputChange(e, index)}
                type="text"
                placeholder={"University"}
              />
              <input
                type="text"
                name="specialize"
                value={education.specialize}
                onChange={e => handleInputChange(e, index)}
                placeholder={"Specializing in..."}
              />
              <input
                type="text"
                name="website"
                value={education.website}
                onChange={e => handleInputChange(e, index)}
                placeholder={"Website"}
              />
            </div>
            <RemoveInputBtn
              show={isLastItem && index > 0}
              handleClick={() => handleRemoveInput(index)}
            />
          </FormWrapperStyled>
        )
      })}

      <AddInputBtn handleAddInput={handleAddEducation} />
    </>
  )
}

export default Education
