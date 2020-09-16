module.exports = {
  siteMetadata: {
    title: `CraftResume`,
    description: `CraftResume - The Most Simple and Fastest way to Craft a Resume. 100% Free Resume Builder - Open Source. Easy to Use and Customizable. Resume Templates.`,
    author: 'Alexis Doutsinis',
    keywords: 'craftresume, free, resume, builder, cv, easy, simple, templates',
  },
  plugins: [
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
    'gatsby-disable-404',
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
            family: `Karla`,
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
        name: `Craft Your Resume`,
        short_name: `Craft Your Resume`,
        start_url: `/`,
        background_color: `#0f4c75`,
        theme_color: `#0f4c75`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
