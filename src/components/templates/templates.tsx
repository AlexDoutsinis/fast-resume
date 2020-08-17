import React from "react"

import { TemplateWrapperStyled } from "../../styled/templatesStyles"
import { useTemplates } from "../../hooks/use-templates"
import Template from "./template"

const Templates: React.FC<{}> = ({ children }) => {
  const { edges } = useTemplates()

  return (
    <TemplateWrapperStyled>
      <h3>{children}</h3>
      <div>
        {edges.map(({ node }) => (
          <Template key={node.name} node={node} />
        ))}
      </div>
    </TemplateWrapperStyled>
  )
}

export default Templates
