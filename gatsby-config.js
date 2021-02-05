module.exports = {
  siteMetadata: {
    title: `Neocracy`,
    description: `Un blog sur neocrcy`,
    author: `L'équipe de Neocracy`,
    siteUrl: `https://www.neocracy.blog.fr`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-verify-brave",
      options: {
        token:
          "8ad58b5ea5f143eb909c990d56012938371dcbccc434f51d71d62bd3df452e8e",
        domain: "neocracy.fr",
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/content`,
        name: "pages",
      },
    },
    "gatsby-plugin-offline",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `tech-blog`,
        short_name: `tech-blog`,
        start_url: `/`,
        background_color: `#1e2127`,
        theme_color: `#1e2127`,
        display: `minimal-ui`,
        icon: `src/images/favicon.webp`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-less`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-codefence`,
          `gatsby-remark-katex`,
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-",
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          },
          {
            // for youtube
            resolve: "gatsby-remark-embed-youtube",
            options: {
              width: 800,
              height: 400,
            },
          },
        ],
      },
    },
    `gatsby-plugin-feed`,
  ],
}