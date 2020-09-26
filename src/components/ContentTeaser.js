import React from "react"
import { useQuery, gql } from "@apollo/client"
import SingleBlogPost from "../components/SingleBlogPost"
import PioneerButton from "./PioneerButton"
import stiftImage from "../images/pngs/stift.png"
import stifteImage from "../images/pngs/stifte.png"

import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  /* background: #f9f6fd; */
  background: white;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* padding: 60px 0 80px 0; */
  padding: 40px 16px;

  @media ${device.tablet} {
    padding: 80px 0 100px 0;
  }
`
const HeadlineContainer = styled.div`
  padding: 16px 0;
  max-width: 1168px;
  width: 100%;
  margin: 0 auto;

  & > div {
    position: relative;
    max-width: 300px;
    h2 {
      z-index: 1;
      position: relative;
    }
    & > img:first-of-type {
      position: absolute;
      left: -20px;
      width: 90px;
      top: -10px;
      user-drag: none;
      user-select: none;
      z-index: 0;
    }
    & > img:nth-of-type(2) {
      z-index: 0;
      position: absolute;
      right: -80px;
      width: 220px;
      top: -25px;
      user-drag: none;
      user-select: none;
    }
  }
  @media ${device.tablet} {
    padding: 32px;
    & > div {
      max-width: 450px;
    }
  }
  @media ${device.laptop} {
    & > div {
      max-width: 650px;
      & > img:first-of-type {
        width: 220px;
        top: -20px;
        left: -60px;
      }
      & > img:nth-of-type(2) {
        right: -50px;
        width: 320px;
        top: -10px;
      }
    }
  }
`

const StyledGrid = styled.div`
  /* padding: 16px; */
  width: 100%;
  max-width: 1168px;
  margin: -40px auto 0;
  position: relative;

  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    padding: 32px;
  }
`

const StyledButtonContainer = styled.div`
  max-width: calc(100vw - 32px);
  margin: auto;
  @media ${device.tablet} {
    text-align: center;
  }
`
function ContentTeaser() {
  const { loading, error, data } = useQuery(THEPIONEERTEASER)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  // const cleanData = data.homepage.featured.content.filter(
  //   (value) => JSON.stringify(value) !== "{}"
  // )
  return (
    <StyledSection>
      <HeadlineContainer>
        <div>
          <img src={stiftImage} alt="Bleistift" />
          <img src={stifteImage} alt="Mehrere Bleistifte" />
          <h2>Entdecken Sie unsere Inhalte</h2>
        </div>
      </HeadlineContainer>
      <StyledGrid>
        {data.homepage.featured.content
          .filter((el) => Object.keys(el).length)
          .slice(1, 4)
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
      <StyledButtonContainer>
        <PioneerButton subline></PioneerButton>
      </StyledButtonContainer>
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
