import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero/hero"
import HeroContent from "../components/hero/heroContent"
import Features from "../components/features/features"
import FeaturesContent from "../components/features/featuresContent"
import TemplateList from "../components/templateList/templateList"
import ResumeBuilder from "../components/resumeBuilder/resumeBuilder"
import { TemplateListContextProvider } from "../contexts/templateList-context"

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
    <TemplateListContextProvider>
      <TemplateList>
        <ResumeBuilder />
      </TemplateList>
    </TemplateListContextProvider>
  </Layout>
)

export default IndexPage
