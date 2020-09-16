export const storeList = <T extends any[]>(list: T): void => {
  const isContactList: boolean = list[0].hasOwnProperty('contactItem')
  const isExperienceList: boolean = list[0].hasOwnProperty('role')
  const isEducationList: boolean = list[0].hasOwnProperty('university')

  if (isContactList) localStorage.setItem('ContactList', JSON.stringify(list))
  if (isExperienceList)
    localStorage.setItem('ExperienceList', JSON.stringify(list))
  if (isEducationList)
    localStorage.setItem('EducationList', JSON.stringify(list))
}
