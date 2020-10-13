import React, { useState, createContext, useContext } from "react"
import { useStoredData } from "../hooks/use-storedData"

export type NavItem =
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
  const {storedSelectedNavItem} = useStoredData()
  const [selectedNavItem, setSelectedNavItem] = useState((storedSelectedNavItem || "Design") as NavItem)

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
