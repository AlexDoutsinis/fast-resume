import React, { useState, createContext, useContext } from 'react'
import { nanoid } from 'nanoid'

import { useStoredData } from '../hooks/use-storedData'

type Profile = {
  fullName: string
  currentPosition: string
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
  uppercaseHeading: boolean
  setUppercaseHeading: React.Dispatch<React.SetStateAction<boolean>>
  letterSpacing: number
  setLetterSpacing: React.Dispatch<React.SetStateAction<number>>
  color: string
  setColor: React.Dispatch<React.SetStateAction<string>>
  font: string
  setFont: React.Dispatch<React.SetStateAction<string>>
}

const FormContext = createContext({} as FormContextProps)

const {
  storedFullName,
  storedCurrentPosition,
  storedProfileSummary,
  storedSkills,
  storeContactList,
  storeExperienceList,
  storeEducationList,
} = useStoredData()

export const FormContextProvider: React.FC<{}> = ({ children }) => {
  const [profile, setProfile] = useState({
    fullName: storedFullName || '',
    currentPosition: storedCurrentPosition || '',
    profileSummary: storedProfileSummary || '',
  } as Profile)
  const [skills, setSkills] = useState(storedSkills || '')
  const [contactList, setContactList] = useState(
    storeContactList ||
      (Array(1).fill({ id: nanoid(), contactItem: '' }) as ContactList),
  )
  const [experienceList, setExperienceList] = useState(
    storeExperienceList ||
      (Array(1).fill({
        id: nanoid(),
        role: '',
        company: '',
        description: '',
      }) as ExperienceList),
  )
  const [educationList, setEducationList] = useState(
    storeEducationList ||
      (Array(1).fill({
        id: nanoid(),
        university: '',
        specialize: '',
        website: '',
      }) as EducationList),
  )
  const [lineHeight, setLineHeight] = useState(1.15)
  const [uppercaseHeading, setUppercaseHeading] = useState(false)
  const [letterSpacing, setLetterSpacing] = useState(1)
  const [color, setColor] = useState('#1b262c')
  const [font, setFont] = useState('Lato')

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
    uppercaseHeading,
    setUppercaseHeading,
    letterSpacing,
    setLetterSpacing,
    color,
    setColor,
    font,
    setFont,
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
