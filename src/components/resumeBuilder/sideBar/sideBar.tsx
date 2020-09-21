import React from 'react'

import { SideBarStyled } from '../../../styled/resumeBuilderStyles'
import Profile from './profile'
import Skills from './skills'
import Contact from './contact'
import Experience from './experience'
import Education from './education'
import Design from './design'
import { useSelectedNavItemContext } from '../../../contexts/selectedNavItem-context'

const SideBar = () => {
  const { selectedNavItem } = useSelectedNavItemContext()

  return (
    <>
      <SideBarStyled>
        {selectedNavItem === 'Profile' && <Profile />}
        {selectedNavItem === 'Skills' && <Skills />}
        {selectedNavItem === 'Contact' && <Contact />}
        {selectedNavItem === 'Experience' && <Experience />}
        {selectedNavItem === 'Education' && <Education />}
        {selectedNavItem === 'Design' && <Design />}
      </SideBarStyled>
    </>
  )
}

export default SideBar
