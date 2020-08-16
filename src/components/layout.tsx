import React from "react"

import Header from "./header"
import useMetaData from "../hooks/use-Metadata"

const Layout: React.FC = ({ children }) => {
  const { siteMetadata } = useMetaData()

  return (
    <>
      <Header siteTitle={siteMetadata.title} />
      <div>
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
