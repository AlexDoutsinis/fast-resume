import React, { useState, createContext, useContext } from "react"

type Profile = {
  fullName: string
  subtitle: string
  profileSummary: string
}

type Contact = {
  item: string
}[]

type Experience = {
  role: string
  company: string
  description: string
}[]

type Education = {
  university: string
  specialize: string
  website: string
}[]

export type InputsContextProps = {
  profile: Profile
  setProfile: (value: Profile) => void
  skills: string
  setSkills: (value: string) => void
  contact: Contact
  setContact: (value: Contact) => void
  experience: Experience
  setExperience: (value: Experience) => void
  education: Education
  setEducation: (value: Education) => void
}

const InputsContext = createContext({} as InputsContextProps)

export const InputsContextProvider: React.FC<{}> = ({ children }) => {
  const [profile, setProfile] = useState({
    fullName: "",
    subtitle: "",
    profileSummary: "",
  } as Profile)
  const [skills, setSkills] = useState("")
  const [contact, setContact] = useState([{ item: "" }] as Contact)
  const [experience, setExperience] = useState([
    { role: "", company: "", description: "" },
  ] as Experience)
  const [education, setEducation] = useState([
    { university: "", specialize: "", website: "" },
  ] as Education)

  const InputsContextState = {
    profile,
    setProfile,
    skills,
    setSkills,
    contact,
    setContact,
    experience,
    setExperience,
    education,
    setEducation,
  }

  return (
    <InputsContext.Provider value={{ ...InputsContextState }}>
      {children}
    </InputsContext.Provider>
  )
}

export const useInputsContext = (): InputsContextProps => {
  return useContext(InputsContext)
}
