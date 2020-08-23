import React from "react"

import { useInputsContext } from "../../contexts/Inputs-context"

const Profile = () => {
  const { profile, setProfile } = useInputsContext()

  function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    setProfile({ ...profile, [e.target.name]: e.target.value })
  }

  return (
    <>
      <input
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
    </>
  )
}

export default Profile
