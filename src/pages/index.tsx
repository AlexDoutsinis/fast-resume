import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/hero'
import HeroContent from '../components/hero/heroContent'
import Features from '../components/features/features'
import FeaturesContent from '../components/features/featuresContent'
import TemplateList from '../components/templateList/templateList'
import ResumeBuilder from '../components/resumeBuilder/resumeBuilder'
import { TemplateListContextProvider } from '../contexts/templateList-context'
import { device } from '../utils/device'

const IndexPage = () => (
  <Layout>
    <SEO
      title="A Simple Way to Craft a Resume | 100% Free"
      meta={[]}
      lang="en"
      description=""
    />
    <SectionStyled>
      <Hero>
        <HeroContent />
      </Hero>
    </SectionStyled>
    <SectionStyled bgBlue>
      <Features>
        <FeaturesContent />
      </Features>
    </SectionStyled>
    <TemplateListContextProvider>
      <SectionStyled>
        <TemplateList>
          <ResumeBuilder />
        </TemplateList>
      </SectionStyled>
    </TemplateListContextProvider>
  </Layout>
)

type Section = {
  bgBlue?: boolean
}

const SectionStyled = styled.section<Section>`
  ${props => props.bgBlue && 'background-color: var(--light-blue-color);'};

  > div {
    width: 85%;
    margin: auto;
    padding: 2.5rem 0;

    ${device.tablet`
      padding: 3.5rem 0;
      width: 90%;
    `};

    ${device.laptopL`
      padding: 5rem 0;
    `};

    ${device.desktop`
      padding: 6.5rem 0;
      width: 70%;
    `};
  }
`

export default IndexPage
