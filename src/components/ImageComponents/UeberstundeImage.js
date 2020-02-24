import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  max-width: 200px;
  max-height: 283px;

  @media ${device.laptop} {
    max-width: 310px;
    max-height: 440px;
  }
`

const HeroImage = () => (
  <StaticQuery
    query={graphql`
      query {
        allFile(filter: { relativePath: { eq: "originals/ueberstunde.jpg" } }) {
          edges {
            node {
              childImageSharp {
                fixed(width: 310) {
                  ...GatsbyImageSharpFixed_withWebp_tracedSVG
                }
              }
            }
          }
        }
      }
    `}
    render={data => {
      const image = data.allFile.edges[0].node.childImageSharp
      return (
        <StyledImage
          fixed={image.fixed}
          imgStyle={{ objectFit: "cover" }}
          alt="Moderatorenteam über Sonnenuntergang von Berlin"
        />
      )
    }}
  />
)
export default HeroImage
