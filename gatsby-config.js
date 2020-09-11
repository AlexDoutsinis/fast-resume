module.exports = {
  siteMetadata: {
    title: `craftyourresume.io`,
    description: `The most simple way to craft a resume that will get you hired.`,
    author: 'Alexis Doutsinis',
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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Craft Your Resume`,
        short_name: `Craft Your Resume`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
