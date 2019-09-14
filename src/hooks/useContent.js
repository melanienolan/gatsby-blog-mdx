import { useStaticQuery, graphql } from "gatsby"

const useContent = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        nodes {
          excerpt
          frontmatter {
            title
            slug
            author
            image {
              childImageSharp {
                fluid(
                  maxHeight: 100
                  maxWidth: 100
                  duotone: { highlight: "#27495A", shadow: "#ffffff" }
                ) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  `)
  return data.allMdx.nodes.map(content => ({
    title: content.frontmatter.title,
    slug: content.frontmatter.slug,
    author: content.frontmatter.author,
    excerpt: content.excerpt,
    image: content.frontmatter.image.childImageSharp.fluid,
  }))
}

export default useContent
