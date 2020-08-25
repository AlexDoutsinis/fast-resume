import React from "react"

import { useFormContext } from "../../contexts/form-context"
import { FormWrapperStyled } from "../../../styled/resumeBuilderStyles"
import { useFocus } from "../../../hooks/use-focus"

const Profile = () => {
  const { profile, setProfile } = useFormContext()
  const { ref } = useFocus()

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  return (
    <>
      <FormWrapperStyled mb={false}>
        <div>
          <input
            ref={ref}
            type="text"
            placeholder={"Full name"}
            name={"fullName"}
            value={profile.fullName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            placeholder={"Subtitle"}
            name={"subtitle"}
            value={profile.subtitle}
            onChange={handleInputChange}
          />
          <textarea
            placeholder={"Profile summary"}
            name={"profileSummary"}
            value={profile.profileSummary}
            onChange={handleInputChange}
          ></textarea>
        </div>
      </FormWrapperStyled>
    </>
  )
}

export default Profile
