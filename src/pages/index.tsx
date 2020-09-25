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
import { useScroll } from '../hooks/use-scroll'

const IndexPage = () => {
  const { ref, executeScroll } = useScroll()

  return (
    <Layout>
      <SEO />
      <SectionStyled>
        <Hero>
          <HeroContent executeScroll={executeScroll} />
        </Hero>
      </SectionStyled>
      <SectionStyled bgBlue>
        <Features>
          <FeaturesContent />
        </Features>
      </SectionStyled>
      <TemplateListContextProvider>
        <SectionStyled ref={ref}>
          <TemplateList>
            <ResumeBuilder />
          </TemplateList>
        </SectionStyled>
      </TemplateListContextProvider>
    </Layout>
  )
}

type Section = {
  bgBlue?: boolean
}

const SectionStyled = styled.section<Section>`
  ${props => props.bgBlue && 'background-color: var(--light-blue-color);'};

  > div {
    width: 85%;
    margin: 0 auto;
    padding: 2.5rem 0;

    ${device.tablet`
      padding: 3.5rem 0;
      width: 90%;
    `};

    ${device.laptop`
      padding: 4rem 0;
      width: 80%;
      max-width: 900px;
    `}

    ${device.laptopL`
      padding: 5rem 0;
      width: 85%;
      max-width: 1300px;
    `};

    ${device.desktop`
      padding: 6.5rem 0;
      width: 60%;
      max-width: 1600px;
    `};
  }
`

export default IndexPage
