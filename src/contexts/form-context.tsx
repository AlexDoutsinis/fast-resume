import React, { useState, createContext, useContext } from "react"

type Profile = {
  fullName: string
  subtitle: string
  profileSummary: string
}

export type ContactList = {
  contactItem: string
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

type FormContextProps = {
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

const FormContext = createContext({} as FormContextProps)

export const FormContextProvider: React.FC<{}> = ({ children }) => {
  const [profile, setProfile] = useState({
    fullName: "",
    subtitle: "",
    profileSummary: "",
  } as Profile)
  const [skills, setSkills] = useState("")
  const [contactList, setContactList] = useState(
    Array(1).fill({ contactItem: "" }) as ContactList
  )
  const [experienceList, setExperienceList] = useState(
    Array(1).fill({ role: "", company: "", description: "" }) as ExperienceList
  )
  const [educationList, setEducationList] = useState(
    Array(1).fill({
      university: "",
      specialize: "",
      website: "",
    }) as EducationList
  )

  const FormContextState = {
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
    <FormContext.Provider value={{ ...FormContextState }}>
      {children}
    </FormContext.Provider>
  )
}

export const useFormContext = (): FormContextProps => {
  return useContext(FormContext)
}
