import React from "react"

import { useInputsContext } from "../../contexts/Inputs-context"

const Profile = () => {
  const { profile, setProfile } = useInputsContext()

  function handleInput(
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
        onChange={handleInput}
      />
      <input
        type="text"
        placeholder={"Subtitle"}
        name={"subtitle"}
        value={profile.subtitle}
        onChange={handleInput}
      />
      <textarea
        placeholder={"Profile summary"}
        name={"profileSummary"}
        value={profile.profileSummary}
        onChange={handleInput}
      ></textarea>
    </>
  )
}

export default Profile
