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

export function useTemplates(): Templates {
  const { allFile }: TemplatesQuery = useStaticQuery(
    graphql`
      query GetTemplates {
        allFile(
          filter: { relativeDirectory: { eq: "resumeTemplates/minimal" } }
        ) {
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
