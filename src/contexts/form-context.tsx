import React, { useState, createContext, useContext } from "react"
import { nanoid } from "nanoid"

type Profile = {
  fullName: string
  subtitle: string
  profileSummary: string
}

export type ContactList = {
  id: string
  contactItem: string
}[]

export type ExperienceList = {
  id: string
  role: string
  company: string
  description: string
}[]

export type EducationList = {
  id: string
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
  lineHeight: number
  setLineHeight: (value: number) => void
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
    Array(1).fill({ id: nanoid(), contactItem: "" }) as ContactList
  )
  const [experienceList, setExperienceList] = useState(
    Array(1).fill({
      id: nanoid(),
      role: "",
      company: "",
      description: "",
    }) as ExperienceList
  )
  const [educationList, setEducationList] = useState(
    Array(1).fill({
      id: nanoid(),
      university: "",
      specialize: "",
      website: "",
    }) as EducationList
  )
  const [lineHeight, setLineHeight] = useState(1.3)

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
    lineHeight,
    setLineHeight,
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
