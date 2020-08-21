import React, { useState, createContext, useContext } from "react"

type NavItem =
  | "Profile"
  | "Skills"
  | "Contact"
  | "Experience"
  | "Education"
  | "Design"

type SelectedNavItemContextProps = {
  selectedNavItem: NavItem
  setSelectedNavItem: (value: NavItem) => void
}

const SelectedNavItemContext = createContext({} as SelectedNavItemContextProps)

export const SelectedNavItemContextProvider: React.FC<{}> = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Profile" as NavItem)

  return (
    <SelectedNavItemContext.Provider
      value={{ selectedNavItem, setSelectedNavItem }}
    >
      {children}
    </SelectedNavItemContext.Provider>
  )
}

export const useSelectedNavItemContext = (): SelectedNavItemContextProps => {
  return useContext(SelectedNavItemContext)
}
