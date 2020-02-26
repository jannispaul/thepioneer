import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  width: 200%;
  cursor: grab;

  @media ${device.laptop} {
  }
`

const PioneerOneImage = () => (
  <StaticQuery
    query={graphql`
      query {
        pioneerOneImage: file(relativePath: { eq: "pioneer-one.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 4000, quality: 70) {
              ...GatsbyImageSharpFluid_withWebp_noBase64
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.pioneerOneImage.childImageSharp
      return (
        <StyledImage
          fluid={image.fluid}
          imgStyle={{ objectFit: "cover" }}
          draggable="false"
          alt="Redaktionsschiff Pioneer One im Querschnitt mit Fotos dder Innenansicht"
        />
      )
    }}
  />
)
export default PioneerOneImage
