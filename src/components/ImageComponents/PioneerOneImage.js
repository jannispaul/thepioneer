import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  @media ${device.laptop} {
  }
`

const PioneerOneImage = () => (
  <StaticQuery
    query={graphql`
      query {
        pioneerOneImage: file(relativePath: { eq: "pioneerone.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 2500, quality: 40) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.pioneerOneImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover" }}
          alt="Redaktionsschiff Pioneer One"
        />
      )
    }}
  />
)
export default PioneerOneImage
