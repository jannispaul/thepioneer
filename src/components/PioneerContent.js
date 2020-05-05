import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerButton from "./PioneerButton"
import SingleBlogPost from "./SingleBlogPost"
import stiftImage from "../images/pngs/stift.png"
import stifteImage from "../images/pngs/stifte.png"

const StyledSection = styled.section`
  overflow: hidden;
  @media ${device.tablet} {
  }
`
const StyledContainer = styled.div`
  padding: 40px 16px;
  position: relative;

  img:first-of-type {
    position: absolute;
    left: -10px;
    width: 90px;
    top: 20px;
    user-drag: none;
    user-select: none;
  }
  img:nth-of-type(2) {
    position: absolute;
    right: -100px;
    width: 220px;
    top: 10px;
    user-drag: none;
    user-select: none;
  }

  & p {
    margin-bottom: 20px;
  }

  & li {
    font-weight: 600;
    padding-left: 24px;
    margin-bottom: 20px;

    :last-of-type {
      margin-bottom: 32px;
    }
    span {
      font-family: " Poppins ", " Open Sans
        ", -apple-system,
        BlinkMacSystemFont, Arial, sans-serif;
      text-transform: uppercase;
      font-weight: 400;
    }
  }
  @media ${device.tablet} {
    max-width: 1168px;
    margin: auto;
    padding: 40px 32px;
  }
`

const StyledButtonContainer = styled.div`
  max-width: calc(100vw - 32px);
  margin: auto;
  @media ${device.tablet} {
    text-align: center;
  }
`

const PioneerJournalism = props => (
  <StyledSection>
    <StyledContainer>
      <img src={stiftImage} alt="Bleistift" />
      <img src={stifteImage} alt="Mehrere Bleistifte" />
      <h2>Entdecken Sie unsere Inhalte</h2>
      <p>Contentful Posts</p>
      {/* {data.allWordpressPost.edges.map(post => {
        return (
          <SingleBlogPost
            key={post.node.id}
            image={
              post.node.featured_media.localFile.childImageSharp.resolutions
            }
            alt={post.node.featured_media.alt_text}
            date={post.node.date}
            title={post.node.title}
            link={post.node.link}
          ></SingleBlogPost>
        )
      })} */}
      <StyledButtonContainer>
        <PioneerButton subline></PioneerButton>
      </StyledButtonContainer>
    </StyledContainer>
  </StyledSection>
)

export default PioneerJournalism
