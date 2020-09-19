import React from 'react'
import { PDFDownloadLink, Font } from '@react-pdf/renderer'

import latoRegular from '../../fonts/Lato-Regular.ttf'
import latoItalic from '../../fonts/Lato-Italic.ttf'
import latoBold from '../../fonts/Lato-Bold.ttf'
import montserratRegular from '../../fonts/Montserrat-Regular.ttf'
import montserratItalic from '../../fonts/Montserrat-Italic.ttf'
import montserratBold from '../../fonts/Montserrat-Bold.ttf'
import karlaRegular from '../../fonts/Karla-Regular.ttf'
import karlaItalic from '../../fonts/Karla-Italic.ttf'
import karlaBold from '../../fonts/Karla-Bold.ttf'
import sourceSansProRegular from '../../fonts/SourceSansPro-Regular.ttf'
import sourceSansProItalic from '../../fonts/SourceSansPro-Italic.ttf'
import sourceSansProBold from '../../fonts/SourceSansPro-Bold.ttf'
import titilliumWebRegular from '../../fonts/TitilliumWeb-Regular.ttf'
import titilliumWebItalic from '../../fonts/TitilliumWeb-Italic.ttf'
import titilliumWebBold from '../../fonts/TitilliumWeb-Bold.ttf'
import arvoRegular from '../../fonts/Arvo-Regular.ttf'
import arvoItalic from '../../fonts/Arvo-Italic.ttf'
import arvoBold from '../../fonts/Arvo-Bold.ttf'

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
  family: 'Karla',
  fonts: [
    {
      src: karlaRegular,
      fontStyle: 'normal',
      fontWeight: 'normal',
    },
    {
      src: karlaItalic,
      fontStyle: 'italic',
      fontWeight: 'normal',
    },
    {
      src: karlaBold,
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
        fileName={`CraftResume-${new Date()}.pdf`}
      >
        {({ loading }) => (
          <button>{loading ? 'Loading...' : 'Export PDF'}</button>
        )}
      </PDFDownloadLink>
    </div>
  )
}

export default SaveAsPdf
