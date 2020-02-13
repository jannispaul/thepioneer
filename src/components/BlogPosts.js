import React from "react"
import { StaticQuery, graphql } from "gatsby"
import SingleBlogPost from "../components/SingleBlogPost"

import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const StyledH2 = styled.h2`
  text-align: center;
`

const StyledGrid = styled.div`
  max-width: 1280px;
  margin: auto;
  /* @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 240px);
  } */
  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 330px);
  }
`

const BlogPosts = ({ data }) => {
  return (
    <StyledSection>
      <StyledH2>Aktuelles im Pioneer Blog</StyledH2>
      <StyledGrid>
        {data.allWordpressPost.edges.map(post => {
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
        })}
      </StyledGrid>
    </StyledSection>
  )
}

export default props => (
  <StaticQuery
    query={graphql`
      query {
        allWordpressPost(
          limit: 3
          filter: {
            categories: { elemMatch: { name: { eq: "Pressemitteilung" } } }
          }
        ) {
          edges {
            node {
              id
              title
              date(locale: "de_DE", formatString: "D. MMMM YYYY")
              link
              featured_media {
                id
                localFile {
                  childImageSharp {
                    # Try editing the "width" and "height" values.
                    resolutions(width: 300, height: 200) {
                      ...GatsbyImageSharpResolutions_withWebp_tracedSVG
                    }
                  }
                }
                alt_text
              }
            }
          }
        }
      }
    `}
    render={data => <BlogPosts data={data} {...props} />}
  />
)
