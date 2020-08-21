import React from "react"

import { NavStyled, NavItemStyled } from "../../styled/resumeBuilderStyles"
import { useSelectedNavItemContext } from "../contexts/selectedNavItem-context"

type NavItems = [
  "Profile",
  "Skills",
  "Contact",
  "Experience",
  "Education",
  "Design"
]

const navItems: NavItems = [
  "Profile",
  "Skills",
  "Contact",
  "Experience",
  "Education",
  "Design",
]

const Navbar = () => {
  const { selectedNavItem, setSelectedNavItem } = useSelectedNavItemContext()

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
      <button>Export PDF</button>
    </NavStyled>
  )
}

export default Navbar
