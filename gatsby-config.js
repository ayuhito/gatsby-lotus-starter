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
        precision: 6,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Poppins:400,500,600,700", "Chivo:300,400,700"],
        },
        timeout: 2000,
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
    {
      resolve: `gatsby-plugin-favicon`,
      options: {
        logo: "./static/images/icons/favicon.png",

        // WebApp Manifest Configuration
        appName: "Gatsby Lotus Starter",
        appDescription: "Gatsby Starter for my own projects.",
        developerName: "Lotus",
        developerURL: "https://lotusdevshack.com/",
        dir: "auto",
        lang: "en-US",
        background: "#fff",
        theme_color: "#5ed7ed",
        display: "standalone",
        orientation: "any",
        start_url: "/",

        icons: {
          android: true,
          appleIcon: true,
          appleStartup: true,
          coast: true,
          favicons: true,
          firefox: true,
          yandex: true,
          windows: true,
        },
      },
    },
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-optimize-svgs`,
    `gatsby-plugin-webpack-size`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
