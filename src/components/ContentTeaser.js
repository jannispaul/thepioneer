import React from "react"
import { useQuery, gql } from "@apollo/client"

import SingleBlogPost from "../components/SingleBlogPost"
import PioneerHeadline from "../components/PioneerHeadline"

import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  /* background: #f9f6fd; */
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 0 80px 0;

  @media ${device.tablet} {
    padding: 80px 0 100px 0;
  }
`

const StyledGrid = styled.div`
  padding: 16px;
  width: 100%;
  max-width: 1168px;
  margin: auto;
  position: relative;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 32px;
  }
  /* @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 330px);
  } */
`

function ContentTeaser() {
  const { loading, error, data } = useQuery(THEPIONEERTEASER)

  if (loading) return <p>Loading...</p>
  if (error)
    return (
      <p>
        Error : {error.message}
        <br />
        JSON:
        {JSON.stringify(error)}
      </p>
    )

  return (
    <StyledSection>
      <PioneerHeadline large center>
        Aktuell
      </PioneerHeadline>
      <StyledGrid>
        {data.homepage.featured.content
          .slice(0, 3)
          .map(
            ({
              id,
              title,
              description,
              slug,
              headerImage,
              createdAt,
              brand,
              authors,
              podcast,
              __typename,
            }) => (
              <SingleBlogPost
                key={id}
                image={headerImage.url}
                alt={headerImage.alt}
                createdAt={createdAt}
                title={title}
                slug={slug}
                description={description}
                brand={brand}
                authors={authors}
                podcast={podcast}
                type={__typename}
              ></SingleBlogPost>
            )
          )}
      </StyledGrid>
    </StyledSection>
  )
}

export default ContentTeaser

const THEPIONEERTEASER = gql`
  query GetContent {
    homepage {
      __typename
      featured {
        content {
          ... on ArticleReduced {
            __typename
            title
            description
            slug
            headerImage {
              url
              alt

              width
              height
            }
            createdAt
            authors {
              id
              name
            }
            brand {
              id
              slug
              title
            }
            podcast {
              duration
            }
          }

          ... on NewsletterReduced {
            __typename
            title
            description
            slug
            headerImage {
              url
              alt
              width
              height
            }
            createdAt
            authors {
              id
              name
            }
            brand {
              id
              slug
              title
            }
          }
        }
      }
    }
  }
`
