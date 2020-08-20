import React from "react"

import { NavStyled, NavItemStyled } from "../../styled/resumeBuilderStyles"
import { useToolbarContext } from "../contexts/toolbarContext"

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
  const { selectedNavItem, setSelectedNavItem } = useToolbarContext()

  return (
    <NavStyled>
      <ul>
        {navItems.map((item, index) => (
          <NavItemStyled
            onClick={() => setSelectedNavItem(index)}
            selectedNavItem={selectedNavItem}
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
