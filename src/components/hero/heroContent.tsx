import React from 'react'

import { useResumeBuilderContext } from '../../contexts/resumeBuilder-context'

const HeroContent = () => {
  const {dispatch} = useResumeBuilderContext()

  function OpenResumeBuilder(): void {
    dispatch({type: "openModal_startWobble"})
  }
  
  return (
    <>
      <h2>The most simple way to craft a resume that will get you hired</h2>
      <p>Completely secure, customizable and 100% free</p>
      <button onClick={OpenResumeBuilder}>Craft your resume</button>
    </>
  )
}

export default HeroContent
