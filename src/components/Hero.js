import React from "react"
import styled from "@emotion/styled"
import { Link, useStaticQuery, graphql } from "gatsby"
import BackgroundImage from "gatsby-background-image"

const ImageBackground = styled(BackgroundImage)`
  background-image: url("/images/barcelona.jpg");
  background-size: cover;
  background-position: 20% center;
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`

const Hero = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "barcelona.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <ImageBackground Tag="section" fluid={image.sharp.fluid} fadeIn="soft">
      <h1>Hero text right here</h1>
    </ImageBackground>
  )
}

export default Hero
