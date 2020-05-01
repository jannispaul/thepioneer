import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"

const StyledImage = styled(Img)`
  position: absolute;
  right: 0;
  bottom: 0;
  @media ${device.laptop} {
  }
`

export default () => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "pngs/mikrofon.png" }) {
        childImageSharp {
          fixed(width: 200, quality: 80) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)
  return (
    <StyledImage
      fixed={data.file.childImageSharp.fixed}
      alt="Hand, die ein Mikrofon hält"
    />
  )
}
