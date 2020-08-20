import React from "react"

import { ToolbarContextProvider } from "../contexts/toolbarContext"

const Toolbar: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <ToolbarContextProvider>{children}</ToolbarContextProvider>
    </div>
  )
}

export default Toolbar
