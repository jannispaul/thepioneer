import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  @media ${device.laptop} {
    display: none;
  }
`

const HeaderImageMobile = () => (
  <StaticQuery
    query={graphql`
      query {
        headerImageMobile: file(relativePath: { eq: "header-mobile.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1400, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.headerImageMobile.childImageSharp
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
export default HeaderImageMobile
