import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import HeroContent from "../components/hero/heroContent"

const IndexPage = () => (
  <Layout>
    <SEO
      title="The Fattest Way to Craft a Resume"
      meta={[]}
      lang="en"
      description=""
    />
    <Hero>
      <HeroContent />
    </Hero>
  </Layout>
)

export default IndexPage
