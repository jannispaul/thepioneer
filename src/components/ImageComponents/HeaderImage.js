import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
// import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
 
`

const HeaderImage = () => (
  <StaticQuery
    query={graphql`
      query {
        headerImage: file(relativePath: { eq: "header.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.headerImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover", objectPosition: "top center" }}
          alt="ThePioneer-Team über Medienschiff ThePioneer One "
        />
      )
    }}
  />
)
export default HeaderImage
