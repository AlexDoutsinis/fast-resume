import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import HeroContent from "../components/hero/heroContent"
import Features from "../components/features/features"
import FeaturesContent from "../components/features/featuresContent"
import Templates from "../components/templates/templates"

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
    <Features>
      <FeaturesContent />
    </Features>
    <Templates>
      <>Pick a template</>
    </Templates>
  </Layout>
)

export default IndexPage
