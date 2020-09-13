import React from 'react'

type Props = {
  executeScroll: () => void
}

const HeroContent = ({ executeScroll }: Props) => {
  return (
    <>
      <h2>The most simple way to craft a resume that will get you hired</h2>
      <p>Completely secure, customizable and 100% free</p>
      <button onClick={executeScroll}>Craft your resume</button>
    </>
  )
}

export default HeroContent
