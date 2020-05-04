import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  z-index: 1;
  @media ${device.laptop} {
  }
`

const HeroPlaceHolderImage = () => (
  <StaticQuery
    query={graphql`
      query {
        myQuery: file(relativePath: { eq: "hero.png" }) {
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
          alt="Computerdisplays mit ThePioneer Inhalten"
        />
      )
    }}
  />
)
export default HeroPlaceHolderImage
