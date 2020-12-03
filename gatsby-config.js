module.exports = {
  plugins: [
    "gatsby-plugin-postcss",
    // {
    //   resolve: "gatsby-plugin-google-analytics",
    //   options: {
    //     trackingId: "",
    //   },
    // },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `ProjectWest`,
    //     short_name: `ProjectWest`,
    //     start_url: `/`,
    //     background_color: `#fff`,
    //     theme_color: `#BE4240`,
    //     display: `standalone`,
    //   },
    // },
    "gatsby-plugin-offline",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
