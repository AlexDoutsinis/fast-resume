import React from 'react'
import styled from 'styled-components'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Hero from '../components/hero/hero'
import HeroContent from '../components/hero/heroContent'
import Features from '../components/features/features'
import FeaturesContent from '../components/features/featuresContent'
import ResumeBuilder from '../components/resumeBuilder/resumeBuilder'
import { ResumeBuilderContextProvider } from '../contexts/resumeBuilder-context'
import { device } from '../utils/device'
import { SelectedNavItemContextProvider } from '../contexts/selectedNavItem-context'
import { FormContextProvider } from '../contexts/form-context'
import Modal from '../components/resumeBuilder/modal'

const IndexPage = () => {

  return (
    <Layout>
      <SEO />
      <ResumeBuilderContextProvider>
        <SelectedNavItemContextProvider>
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
          <FormContextProvider>
            <Modal>
              <ResumeBuilder />
            </Modal>
          </FormContextProvider>
        </SelectedNavItemContextProvider>
      </ResumeBuilderContextProvider>
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
      max-width: 950px;
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
