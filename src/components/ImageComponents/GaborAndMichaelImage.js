import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  @media ${device.laptop} {
  }
`

const GaborAndMichaelImage = () => (
  <StaticQuery
    query={graphql`
      query {
        gaborAndMichaelImage: file(
          relativePath: { eq: "gabor-und-micheal.jpg" }
        ) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.gaborAndMichaelImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover" }}
          alt="Gabor Steingart und Michael Bröcker"
        />
      )
    }}
  />
)
export default GaborAndMichaelImage
