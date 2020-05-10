module.exports = {
  siteMetadata: {
    title: `Gatsby Lotus Starter`,
    description: `Gatsby Starter for my own projects.`,
    author: `@Lotus`,
    siteUrl: `https://lotusdevshack.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("postcss-preset-env")({ stage: 3 }),
          require("cssnano")({
            preset: "default",
          }),
        ],
        precision: 6,
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `white`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "static/images/icons/favicon.svg",
        cache_busting_mode: "none", // For compatibility with gatsby-plugin-offline
        name: `gatsby-lotus-starter`,
        short_name: `lotus-starter`,
        description: `Gatsby Starter for my own projects.`,
        start_url: `/`,
        background_color: `#5ed7ed`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    {
      resolve: "gatsby-plugin-offline",
      options: {
        workboxConfig: {
          globPatterns: ["**/*"],
        },
      },
    },
  ],
}
