import React from 'react'

import Navbar from './navbar'
import SideBar from './sideBar/sideBar'
import CurrentTemplate from './currentTemplate/currentTemplate'
import { useLockBodyScroll } from '../../hooks/use-lockBodyScroll'

const ResumeBuilder = () => {
  useLockBodyScroll()

  return (
    <div>
      <Navbar />
      <SideBar />
      <CurrentTemplate />
    </div>
  )
}

export default ResumeBuilder
