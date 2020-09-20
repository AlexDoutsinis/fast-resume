import {
  Profile,
  ContactList,
  ExperienceList,
  EducationList,
} from '../contexts/form-context'

export type PropTypes = {
  profile: Profile
  skills: string
  contactList: ContactList
  experienceList: ExperienceList
  educationList: EducationList
  uppercaseHeading: boolean
  letterSpacing: number
  color: string
  lineHeight: number
  font: string
}
