import React from "react"
import { StaticQuery, graphql } from "gatsby"
// import styled from "styled-components"
// import StandardLayout from "../components/pagelayouts/StandardLayout"
// import SEO from "../components/Seo"
// import { device } from "../theme/breakpoints"

const BlogPosts = props => (
  <div>
    <h2>Neues von MP</h2>
    {props.data.allWordpressPost.edges.map(post => {
      return (
        <div key={post.node.id}>
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
    {/* {props.data.allReviewsYaml.edges.map((review, index) => {
                        return (
                            <SingleReview
                                key={index}
                                rating={review.node.rating}
                                name={review.node.name}
                                date={review.node.date}
                                review={review.node.review}
                            />
                        )
                    })} */}
  </div>
)

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
            }
          }
        }
      }
    `}
    render={data => <BlogPosts data={data} {...props} />}
  />
)
