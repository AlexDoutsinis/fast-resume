import React from 'react'

import { NavStyled, NavItemStyled } from '../../styled/resumeBuilderStyles'
import { useSelectedNavItemContext } from '../../contexts/selectedNavItem-context'
import { useTemplateListContext } from '../../contexts/templateList-context'
import SaveAsPdf from './saveAsPdf'
import PdfMinimal1 from '../../pdfTemplates/minimal/pdfMinimal1'
import { useFormContext } from '../../contexts/form-context'

type NavItems = [
  'Profile',
  'Skills',
  'Contact',
  'Experience',
  'Education',
  'Design',
]

const navItems: NavItems = [
  'Profile',
  'Skills',
  'Contact',
  'Experience',
  'Education',
  'Design',
]

const Navbar = () => {
  const { selectedNavItem, setSelectedNavItem } = useSelectedNavItemContext()
  const {
    state: { currentTemplate },
  } = useTemplateListContext()
  const {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
    letterSpacing,
    color,
    lineHeight,
    font,
  } = useFormContext()

  const pdfProps = {
    profile,
    skills,
    contactList,
    experienceList,
    educationList,
    uppercaseHeading,
    letterSpacing,
    color,
    lineHeight,
    font,
  }

  return (
    <NavStyled>
      <ul>
        {navItems.map((item, index) => (
          <NavItemStyled
            onClick={() => setSelectedNavItem(navItems[index])}
            selectedNavItem={navItems.indexOf(selectedNavItem)}
            index={index}
            key={item}
          >
            {item}
          </NavItemStyled>
        ))}
      </ul>

      <SaveAsPdf>
        {currentTemplate === 'minimal1' && <PdfMinimal1 {...pdfProps} />}
      </SaveAsPdf>
    </NavStyled>
  )
}

export default Navbar
