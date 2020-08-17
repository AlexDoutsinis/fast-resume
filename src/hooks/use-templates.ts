import { useStaticQuery, graphql } from "gatsby"

type TemplatesQuery = {
  allFile: Templates
}

type Templates = {
  edges: Node[]
}

type Node = {
  node: {
    name: string
    childImageSharp: {
      fluid: any
    }
  }
}

function useTemplates(): Templates {
  const { allFile }: TemplatesQuery = useStaticQuery(
    graphql`
      query GetTemplates {
        allFile(filter: { relativeDirectory: { eq: "templates" } }) {
          edges {
            node {
              name
              childImageSharp {
                fluid(maxWidth: 200, quality: 65) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    `
  )

  return { edges: allFile.edges }
}

export { useTemplates }
