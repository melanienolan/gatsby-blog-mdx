import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const StyledBackgroundImage = styled(BackgroundImage)`
  height: 75vh;
`

const HeroImage = ({ children }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "houston-ray.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <StyledBackgroundImage Tag="div" fluid={image.sharp.fluid} fadeIn="soft">
      {children}
    </StyledBackgroundImage>
  )
}

export default HeroImage
