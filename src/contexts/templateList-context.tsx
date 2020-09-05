import React, { createContext, useContext } from "react"

import {
  TemplateList,
  useTemplateListReducer,
} from "../reducers/templateListReducer"

const TemplateListContext = createContext({} as TemplateList)

export const TemplateListContextProvider: React.FC<{}> = ({ children }) => {
  const { state, dispatch } = useTemplateListReducer()

  return (
    <TemplateListContext.Provider value={{ state, dispatch }}>
      {children}
    </TemplateListContext.Provider>
  )
}

export const useTemplateListContext = (): TemplateList => {
  return useContext(TemplateListContext)
}
