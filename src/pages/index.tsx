import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import HeroContent from "../components/hero/heroContent"
import Features from "../components/features/features"
import FeaturesContent from "../components/features/featuresContent"
import TemplateList from "../components/templates/templateList"

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
    <TemplateList>
      <>Pick a template</>
    </TemplateList>
  </Layout>
)

export default IndexPage
