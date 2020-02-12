import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

// import styled from "styled-components"
// import Layout from "../components/pagelayouts/Layout"
// import SEO from "../components/Seo"
// import { device } from "../theme/breakpoints"

const BlogPosts = ({ data }) => {
  return (
    <div>
      <h2>Neues von MP</h2>
      {data.allWordpressPost.edges.map(post => {
        return (
          <div key={post.node.id}>
            <Img
              resolutions={
                post.node.featured_media.localFile.childImageSharp.resolutions
              }
              key={post.node.featured_media.id}
            />

            <p>{post.node.date}</p>
            <p
              dangerouslySetInnerHTML={{
                __html: post.node.title,
              }}
            ></p>
            <a href={post.node.link}>Weiterlesen</a>
          </div>
        )
      })}
    </div>
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
