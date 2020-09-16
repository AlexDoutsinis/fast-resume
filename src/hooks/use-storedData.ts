import {
  ContactList,
  ExperienceList,
  EducationList,
} from '../contexts/form-context'

const storedFullName = localStorage.getItem('fullName')
const storedCurrentPosition = localStorage.getItem('currentPosition')
const storedProfileSummary = localStorage.getItem('profileSummary')
const storedSkills = localStorage.getItem('skills')

const storeContactList: ContactList = JSON.parse(
  localStorage.getItem('ContactList'),
)
const storeExperienceList: ExperienceList = JSON.parse(
  localStorage.getItem('ExperienceList'),
)
const storeEducationList: EducationList = JSON.parse(
  localStorage.getItem('EducationList'),
)

type StoredData = {
  storedFullName: string
  storedCurrentPosition: string
  storedProfileSummary: string
  storedSkills: string
  storeContactList: ContactList
  storeExperienceList: ExperienceList
  storeEducationList: EducationList
}

export const useStoredData = (): StoredData => {
  return {
    storedFullName,
    storedCurrentPosition,
    storedProfileSummary,
    storedSkills,
    storeContactList,
    storeExperienceList,
    storeEducationList,
  }
}
