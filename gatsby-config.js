module.exports = {
  siteMetadata: {
    title: "Gatsby Blog MDX",
    description: "An example of a Gatsby blog with MDX",
    author: "@melanienolan",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "images",
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "gatsby-starter-blog",
        short_name: "blog",
        start_url: "/",
        background_color: "#27495A",
        theme_color: "#27495A",
        display: "standalone",
        icon: "static/images/leaf.png",
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Layout.js"),
        },
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "content",
      },
    },
  ],
}
