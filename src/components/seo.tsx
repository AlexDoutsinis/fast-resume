import React from "react"
import { Helmet } from "react-helmet"
import useMetaData from "../hooks/use-Metadata"

type Props = {
  description?: string
  lang?: string
  meta?: []
  title: string
}

function SEO({ description, lang, meta, title }: Props) {
  const { siteMetadata } = useMetaData()

  const metaDescription = description || siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
      ].concat(meta)}
    />
  )
}

export default SEO
