import {
  ContactList,
  ExperienceList,
  EducationList,
} from '../contexts/form-context'

let storedFullName = null
let storedCurrentPosition = null
let storedProfileSummary = null
let storedSkills = null
let storedLineHeight = null
let storedLetterSpacing = null
let storedUppercaseHeading = null
let storedColor = null
let storedFont = null
let storedCurrentTemplate = null
let storedSelectedNavItem = null

let storeContactList: ContactList = null
let storeExperienceList: ExperienceList = null
let storeEducationList: EducationList = null

if (typeof window !== 'undefined') {
  storedFullName = localStorage.getItem('fullName')
  storedCurrentPosition = localStorage.getItem('currentPosition')
  storedProfileSummary = localStorage.getItem('profileSummary')
  storedSkills = localStorage.getItem('skills')
  storedLineHeight = parseFloat(localStorage.getItem('lineHeight'))
  storedLetterSpacing = parseFloat(localStorage.getItem('letterSpacing'))
  storedUppercaseHeading = localStorage.getItem('uppercaseHeading') == 'true'
  storedColor = localStorage.getItem('color')
  storedFont = localStorage.getItem('font')
  storedCurrentTemplate = localStorage.getItem('currentTemplate')
  storedSelectedNavItem = localStorage.getItem('selectedNavItem')

  storeContactList = JSON.parse(localStorage.getItem('ContactList'))
  storeExperienceList = JSON.parse(localStorage.getItem('ExperienceList'))
  storeEducationList = JSON.parse(localStorage.getItem('EducationList'))
}

type StoredData = {
  storedFullName: string
  storedCurrentPosition: string
  storedProfileSummary: string
  storedSkills: string
  storeContactList: ContactList
  storeExperienceList: ExperienceList
  storeEducationList: EducationList
  storedLineHeight: number
  storedLetterSpacing: number
  storedUppercaseHeading: boolean
  storedColor: string
  storedFont: string
  storedCurrentTemplate: string
  storedSelectedNavItem: string
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
    storedLineHeight,
    storedLetterSpacing,
    storedUppercaseHeading,
    storedColor,
    storedFont,
    storedCurrentTemplate,
    storedSelectedNavItem
  }
}
