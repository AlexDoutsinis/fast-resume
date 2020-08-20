import React from "react"

import Toolbar from "./toolBar"
import Navbar from "./navbar"
import SideBar from "./sideBar/sideBar"

const ResumeBuilder = () => {
  return (
    <div>
      <Toolbar>
        <Navbar />
        <SideBar />
      </Toolbar>
    </div>
  )
}

export default ResumeBuilder
