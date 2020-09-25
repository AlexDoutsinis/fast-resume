import React from 'react'
import { PDFDownloadLink, Font } from '@react-pdf/renderer'

import latoRegular from '../../fonts/lato-regular.ttf'
import latoItalic from '../../fonts/lato-italic.ttf'
import latoBold from '../../fonts/lato-bold.ttf'
import montserratRegular from '../../fonts/montserrat-regular.ttf'
import montserratItalic from '../../fonts/montserrat-italic.ttf'
import montserratBold from '../../fonts/montserrat-bold.ttf'
import nunitoRegular from '../../fonts/nunito-regular.ttf'
import nunitoItalic from '../../fonts/nunito-italic.ttf'
import nunitoBold from '../../fonts/nunito-bold.ttf'
import sourceSansProRegular from '../../fonts/source-sans-pro-regular.ttf'
import sourceSansProItalic from '../../fonts/source-sans-pro-italic.ttf'
import sourceSansProBold from '../../fonts/source-sans-pro-bold.ttf'
import titilliumWebRegular from '../../fonts/titillium-web-regular.ttf'
import titilliumWebItalic from '../../fonts/titillium-web-italic.ttf'
import titilliumWebBold from '../../fonts/titillium-web-bold.ttf'
import arvoRegular from '../../fonts/arvo-regular.ttf'
import arvoItalic from '../../fonts/arvo-italic.ttf'
import arvoBold from '../../fonts/arvo-bold.ttf'

Font.registerHyphenationCallback(word => [word])

Font.register({
  family: 'Lato',
  fonts: [
    {
      src: latoRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    { src: latoItalic, fontStyle: 'italic', fontWeight: 'normal' },
    { src: latoBold, fontStyle: 'normal', fontWeight: 'bold' },
  ],
})

Font.register({
  family: 'Montserrat',
  fonts: [
    {
      src: montserratRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: montserratItalic,
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    {
      src: montserratBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ],
})

Font.register({
  family: 'Nunito',
  fonts: [
    {
      src: nunitoRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: nunitoItalic,
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    {
      src: nunitoBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ],
})

Font.register({
  family: 'Source Sans Pro',
  fonts: [
    {
      src: sourceSansProRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: sourceSansProItalic,
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    {
      src: sourceSansProBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ],
})

Font.register({
  family: 'Titillium Web',
  fonts: [
    {
      src: titilliumWebRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: titilliumWebItalic,
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    {
      src: titilliumWebBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ],
})

Font.register({
  family: 'Arvo',
  fonts: [
    {
      src: arvoRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: arvoItalic,
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    {
      src: arvoBold,
      fontStyle: 'normal',
      fontWeight: 'bold',
    },
  ],
})

type Props = {
  children: JSX.Element
}

const SaveAsPdf = ({ children: PdfTemplate }: Props) => {
  return (
    <div>
      <PDFDownloadLink
        document={PdfTemplate}
        fileName={`FastResume-${Date.now()}.pdf`}
      >
        {({ loading }) => (
          <button>{loading ? 'Loading...' : 'Export PDF'}</button>
        )}
      </PDFDownloadLink>
    </div>
  )
}

export default SaveAsPdf
