// Initialize dotenv
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`, // or '.env'
})

module.exports = {
  siteMetadata: {
    title: process.env.SITE_TITLE,
    description: process.env.DESCRIPTION,
    author: "Maxime Cordeiro",
    siteUrl: process.env.SITE_URL,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-verify-brave",
      options: {
        token: process.env.BRAVE_TOKEN,
        domain: process.env.DOMAIN,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/${process.env.SITE_IMAGES_PATH}`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/${process.env.SITE_CONTENT_PATH}`,
        name: "pages",
      },
    },
    "gatsby-plugin-offline",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: process.env.SITE_TITLE,
        short_name: process.env.SITE_TITLE,
        start_url: `/`,
        background_color: `#1e2127`,
        theme_color: `#1e2127`,
        display: `minimal-ui`,
        icon: process.env.SITE_FAVICON_PATH, // This path is relative to the root of the site.
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "table-of-contents",
            },
          },
          `gatsby-remark-autolink-headers`,
        ],
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        // language JSON resource path
        path: `${__dirname}/src/intl`,
        // supported language
        languages: [`en`, `fr`],
        // language file path
        defaultLanguage: `fr`,
        // option to redirect to `/en` when connecting `/`
        redirect: true,
      },
    },
    {
      resolve: `gatsby-plugin-gitalk`,
      options: {
        config: {
          clientID: "43a55dce17bf4ffe2bdf",
          clientSecret: "84a5a2537144db96858047a2002b1b7da6872c74",
          repo: "NeoCracyBlog_comments",
          owner: "mjcc30",
          admin: ["mjcc30"],
        },
      },
    },
  ],
}
