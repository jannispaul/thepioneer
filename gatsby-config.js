module.exports = {
  siteMetadata: {
    title: `Join ThePioneer`,
    description: `Gabor Steingart und Crew präsentieren ThePioneer. Gemeinsam können wir den Journalismus neu beleben.`,
    author: `Gabor Steingart, Michael Bröcker, Gordon Repinski`,
    siteUrl: `https://join.thepioneer.com`,
    keywords: `Journalismus, Morning Briefing, Redaktionsschiff, Pioneer One`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `join thepioneer`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#6622C3`,
        theme_color: `#1F1F1F`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
