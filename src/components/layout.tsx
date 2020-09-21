import React from 'react'

import '../globalStyles.css'
import Header from './header'
import useMetaData from '../hooks/use-metadata'
import Footer from './footer/footer'

const Layout: React.FC = ({ children }) => {
  const { siteMetadata } = useMetaData()

  return (
    <>
      <Header siteTitle={siteMetadata.title} />
      <div>
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
