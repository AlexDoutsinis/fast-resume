module.exports = {
  siteMetadata: {
    title: `FastResume`,
    description: `FastResume - The Most Simple and Fastest way to Craft a Resume. 100% Free Resume Builder - Open Source. Easy to Use and Customizable. Resume Templates.`,
    author: 'Alexis Doutsinis',
    keywords:
      'fastresume, free, resume, builder, cv, easy, simple, fast, templates',
    siteUrl: 'https://fastresume.me',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GATSBY_GOOGLE_ANALYTICS_TRACKING_ID,
        head: true,
        anonymize: true,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/resumeTemplates`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /Illustrations/,
        },
      },
    },
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`400`, `700`],
          },
          {
            family: `Montserrat`,
            variants: [`400`, `700`],
          },
          {
            family: `Nunito`,
            variants: [`400`, `700`],
          },
          {
            family: `Source Sans Pro`,
            variants: [`400`, `700`],
          },
          {
            family: `Titillium Web`,
            variants: [`400`, `700`],
          },
          {
            family: `Arvo`,
            variants: [`400`, `700`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `FastResume`,
        short_name: `FastResume`,
        start_url: `/`,
        background_color: `#0f4c75`,
        theme_color: `#0f4c75`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
