import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../../theme/breakpoints"

const StyledImage = styled(Img)`
  max-width: 200px;
  max-height: 200px;
  @media ${device.laptop} {
    max-width: 310px;
    max-height: 310px;
  }
`

export default () => (
  <StaticQuery
    query={graphql`
      query {
        file(relativePath: { eq: "originals/oekonomie-briefing.jpg" }) {
          childImageSharp {
            fixed(width: 400) {
              ...GatsbyImageSharpFixed_withWebp_tracedSVG
            }
          }
        }
      }
    `}
    render={(data) => {
      return (
        <StyledImage
          fixed={data.file.childImageSharp.fixed}
          imgStyle={{ objectFit: "cover" }}
          alt="Zwei Männer in Anzügen vor einem Hochhaus. Feld & Haucap: Das Ökonomie-Briefing"
        />
      )
    }}
  />
)
