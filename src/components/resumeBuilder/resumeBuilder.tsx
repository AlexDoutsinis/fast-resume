import React from "react"

import { SelectedNavItemContextProvider } from "../contexts/selectedNavItem-context"
import Navbar from "./navbar"
import SideBar from "./sideBar/sideBar"
import CurrentTemplate from "./currentTemplate/currentTemplate"

const ResumeBuilder = () => {
  return (
    <div>
      <SelectedNavItemContextProvider>
        <Navbar />
        <SideBar />
      </SelectedNavItemContextProvider>
      <CurrentTemplate />
    </div>
  )
}

export default ResumeBuilder
