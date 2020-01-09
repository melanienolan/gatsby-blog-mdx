import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import styled from "@emotion/styled"

const ImageBackground = styled(BackgroundImage)`
  background-image: url("/images/houston-ray.jpg");
  background-size: cover;
  background-position: 20% center;
  background-repeat: no-repeat;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  position: relative;
`

const Background = ({ children }) => {
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
    <ImageBackground Tag="div" fluid={image.sharp.fluid} fadeIn="soft">
      {children}
    </ImageBackground>
  )
}

export default Background
