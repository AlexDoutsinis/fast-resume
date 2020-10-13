import React, { createContext, useContext } from "react"

import {
  ResumeBuilder,
  useResumeBuilderReducer,
} from "../reducers/resumeBuilderReducer"

const ResumeBuilderContext = createContext({} as ResumeBuilder)

export const ResumeBuilderContextProvider: React.FC<{}> = ({ children }) => {
  const { state, dispatch } = useResumeBuilderReducer()

  return (
    <ResumeBuilderContext.Provider value={{ state, dispatch }}>
      {children}
    </ResumeBuilderContext.Provider>
  )
}

export const useResumeBuilderContext = (): ResumeBuilder => {
  return useContext(ResumeBuilderContext)
}
