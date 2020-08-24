import React, { useState, createContext, useContext } from "react"

type Profile = {
  fullName: string
  subtitle: string
  profileSummary: string
}

export type ContactList = {
  item: string
}[]

export type ExperienceList = {
  role: string
  company: string
  description: string
}[]

export type EducationList = {
  university: string
  specialize: string
  website: string
}[]

type InputsContextProps = {
  profile: Profile
  setProfile: (value: Profile) => void
  skills: string
  setSkills: (value: string) => void
  contactList: ContactList
  setContactList: (value: ContactList) => void
  experienceList: ExperienceList
  setExperienceList: (value: ExperienceList) => void
  educationList: EducationList
  setEducationList: (value: EducationList) => void
}

const InputsContext = createContext({} as InputsContextProps)

export const InputsContextProvider: React.FC<{}> = ({ children }) => {
  const [profile, setProfile] = useState({
    fullName: "",
    subtitle: "",
    profileSummary: "",
  } as Profile)
  const [skills, setSkills] = useState("")
  const [contactList, setContactList] = useState(
    Array(3).fill({ item: "" }) as ContactList
  )
  const [experienceList, setExperienceList] = useState(
    Array(2).fill({ role: "", company: "", description: "" }) as ExperienceList
  )
  const [educationList, setEducationList] = useState(
    Array(2).fill({
      university: "",
      specialize: "",
      website: "",
    }) as EducationList
  )

  const InputsContextState = {
    profile,
    setProfile,
    skills,
    setSkills,
    contactList,
    setContactList,
    experienceList,
    setExperienceList,
    educationList,
    setEducationList,
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
