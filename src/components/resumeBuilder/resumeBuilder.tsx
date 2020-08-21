import React from "react"

import { SelectedNavItemContextProvider } from "../contexts/selectedNavItem-context"
import Navbar from "./navbar"
import SideBar from "./sideBar/sideBar"

const ResumeBuilder = () => {
  console.log("ResumeBuilder: re-render")

  return (
    <div>
      <SelectedNavItemContextProvider>
        <Navbar />
        <SideBar />
      </SelectedNavItemContextProvider>
    </div>
  )
}

export default ResumeBuilder
