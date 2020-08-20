import React, { useState, createContext, useContext } from "react"

type ToolbarContext = {
  selectedNavItem: number
  setSelectedNavItem: (value: number) => void
}

const ToolbarContext = createContext({} as ToolbarContext)

export const ToolbarContextProvider: React.FC<{}> = ({ children }) => {
  const [selectedNavItem, setSelectedNavItem] = useState(0)

  return (
    <ToolbarContext.Provider value={{ selectedNavItem, setSelectedNavItem }}>
      {children}
    </ToolbarContext.Provider>
  )
}

export const useToolbarContext = (): ToolbarContext => {
  return useContext(ToolbarContext)
}
