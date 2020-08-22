import React from "react"

import { useInputsContext } from "../../contexts/Inputs-context"

const Skills = () => {
  const { skills, setSkills } = useInputsContext()

  function handleInput(e: React.ChangeEvent<HTMLTextAreaElement>) {
    setSkills(e.target.value)
  }

  return (
    <>
      <textarea
        name={"skills"}
        value={skills}
        onChange={handleInput}
        placeholder={"Describe your skills"}
      ></textarea>
    </>
  )
}

export default Skills
