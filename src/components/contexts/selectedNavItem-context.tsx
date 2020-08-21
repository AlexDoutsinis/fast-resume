import React, { useState, createContext, useContext } from "react"

type NavItems =
  | "Profile"
  | "Skills"
  | "Contact"
  | "Experience"
  | "Education"
  | "Design"

type SelectedNavItemContextProps = {
  selectedNavItem: NavItems
  setSelectedNavItem: (value: NavItems) => void
}

const SelectedNavItemContext = createContext({} as SelectedNavItemContextProps)

export const SelectedNavItemContextProvider: React.FC<{}> = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState("Profile" as NavItems)

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
