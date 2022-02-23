import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  margin: -30px 0 0 -100px;
  z-index: 0;
  width: 120%;
  animation: rotating 2s alternate infinite;

  @media ${device.tablet} {
    width: 100%;
    margin: 0;
  }
  @keyframes rotating {
    from {
      transform: rotate(-0.5deg);
    }
    to {
      transform: rotate(0.5deg);
    }
  }
`

const HeroShipImage = () => (
  <StaticQuery
    query={graphql`
      query {
        myQuery: file(relativePath: { eq: "hero-ship.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 80) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.myQuery.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover" }}
          alt="Das Redaktionsschiff - Pioneer One"
        />
      )
    }}
  />
)
export default HeroShipImage
