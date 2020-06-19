exports.createPages = async ({ actions, graphql, reporter }) => {
  const result = await graphql(`
    query {
      allMdx {
        nodes {
          frontmatter {
            slug
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic("failed to create pages", JSON.stringify(result.errors))
  }
  const articles = result.data.allMdx.nodes

  articles.forEach(article => {
    actions.createPage({
      path: `/articles/${article.frontmatter.slug}/`,
      component: require.resolve("./src/templates/article-template.js"),
      context: {
        slug: article.frontmatter.slug,
      },
    })
  })
}
