import React from 'react'
import { Document } from '@react-pdf/renderer'
import styled from 'styled-components'

import { NavStyled, NavItemStyled } from '../../styled/resumeBuilderStyles'
import { useSelectedNavItemContext } from '../../contexts/selectedNavItem-context'
import { useTemplateListContext } from '../../contexts/templateList-context'
import SaveAsPdf from './saveAsPdf'
import PdfMinimal1 from '../../pdfTemplates/minimal/pdfMinimal1'
import { useFormContext } from '../../contexts/form-context'
import PdfMinimal2 from '../../pdfTemplates/minimal/pdfMinimal2'
import PdfMinimal3 from '../../pdfTemplates/minimal/pdfMinimal3'
import PdfMinimal4 from '../../pdfTemplates/minimal/pdfMinimal4'
import PdfMinimal5 from '../../pdfTemplates/minimal/pdfMinimal5'

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
    dispatch,
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

  function pdfTemplate() {
    if (currentTemplate === 'minimal1') return <PdfMinimal1 {...pdfProps} />
    if (currentTemplate === 'minimal2') return <PdfMinimal2 {...pdfProps} />
    if (currentTemplate === 'minimal3') return <PdfMinimal3 {...pdfProps} />
    if (currentTemplate === 'minimal4') return <PdfMinimal4 {...pdfProps} />
    if (currentTemplate === 'minimal5') return <PdfMinimal5 {...pdfProps} />
  }

  function closeModal(): void {
    dispatch({ type: 'closeModal_stopWobble' })
  }

  return (
    <>
      <CloseIconStyled onClick={closeModal}>x</CloseIconStyled>
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
          <Document>{pdfTemplate()}</Document>
        </SaveAsPdf>
      </NavStyled>
    </>
  )
}

const CloseIconStyled = styled.div`
  display: inline-block;
  padding: 4px 8px;
  font-size: 1rem;
  cursor: pointer;
  margin-bottom: 3px;
`

export default Navbar
