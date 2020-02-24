import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  position: absolute !important;
  width: 100%;
  height: calc(100vh - 80px);
  max-height: 90vw;
  top: 0;
  left: 0;
  z-index: -1;
  @media ${device.laptop} {
  }
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        heroImage: file(relativePath: { eq: "hero-cover.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2400, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.heroImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover", objectPosition: "top center" }}
          alt="ThePioneer-Team schweben in Formation über Berlin und den Globus "
        />
      )
    }}
  />
)
export default HeroImage
