import React from 'react'
import { Helmet } from 'react-helmet'
import useMetaData from '../hooks/use-Metadata'

function SEO() {
  const { siteMetadata } = useMetaData()

  const title = 'A Simple Way to Craft a Resume | 100% Free'
  const metaDescription = siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang: 'en',
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
        {
          property: `og:url`,
          content: ``,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: 'keywords',
          content: siteMetadata.keywords,
        },
      ]}
    />
  )
}

export default SEO
