import React from "react"
import { useQuery, gql } from "@apollo/client"

import SingleBlogPost from "../components/SingleBlogPost"
import PioneerHeadline from "../components/PioneerHeadline"

import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
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
  max-width: 1280px;
  margin: auto;
  position: relative;
  @media ${device.tablet} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
  }
  /* @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(3, 330px);
  } */
`

function ContentTeaser() {
  const { loading, error, data } = useQuery(THEPIONEERTEASER)
  const data2 = {
    homepage: {
      featured: {
        content: [
          {
            __typename: "ArticleReduced",
            title: "Reem Sahwil hat ihre Heimat gefunden",
            description:
              "Fünf Jahre nach dem Bürgerdialog in Rostock treffen wir Reem Sahwil.",
            slug: "reem-sahwil-hat-ihre-heimat-gefunden",
            headerImage: {
              url:
                "//image-service.thepioneer.de/show/mj324dykhxwi/5FCpWNa6xqwOqZBOKm5n1j/27f50ac43a47bafe2947a4bb5652b145/IMG_5552.jpg",
              alt: "Reem Sahwil",
              width: 2714,
              height: 3622,
            },
            createdAt: "2020-07-14T19:12:28.773Z",
            authors: [
              {
                id: "QXV0aG9yLWFsZXYtZG9nYW4=",
                name: "Alev Doğan",
              },
            ],
            brand: null,
            podcast: null,
          },
          {
            __typename: "NewsletterReduced",
            title: "Der König von Bayern",
            description: "Das Morning Briefing vom 15.7.2020",
            slug: "der-koenig-von-bayern",
            headerImage: {
              url:
                "//image-service.thepioneer.de/show/mj324dykhxwi/1bdfoaM6Fkd8Uf1DFDtCeO/6fbd84fc3b6479880e283db5ed49d38f/20200715-header-morning-briefing-media-pioneer-so___e__der-ludwig-bayern.jpg",
              alt: "20200715 Header Morning Briefing",
              width: 3840,
              height: 2160,
            },
            createdAt: "2020-07-15T06:02:48.953Z",
            authors: [
              {
                id: "QXV0aG9yLWdvcmRvbi1yZXBpbnNraQ==",
                name: "Gordon Repinski",
              },
            ],
            brand: {
              id: "QnJhbmQtbW9ybmluZy1icmllZmluZw==",
              slug: "morning-briefing",
              title: "Morning Briefing ",
            },
          },
          {
            __typename: "ArticleReduced",
            title: "„Europa braucht den Euro-Wumms“",
            description:
              "SPD-Chef Norbert Walter-Borjans über europäische Solidarität und die K-Frage der SPD",
            slug: "europa-braucht-den-euro-wumms",
            headerImage: {
              url:
                "//image-service.thepioneer.de/show/mj324dykhxwi/212EfwQEw3N9BVuZCbQ88R/ae62ee81240e947c8da3eb3986df266f/20200715-podcast-app-morning-briefing-media-pioneer-walter-borjans.jpg",
              alt: "Norbert Walter-Borjans, SPD-Vorsitzender, Podcast",
              width: 1782,
              height: 1782,
            },
            createdAt: "2020-07-15T05:10:19.615Z",
            authors: [
              {
                id: "QXV0aG9yLWNoZWxzZWEtc3BpZWtlcg==",
                name: "Chelsea Spieker",
              },
            ],
            brand: {
              id: "QnJhbmQtbW9ybmluZy1icmllZmluZw==",
              slug: "morning-briefing",
              title: "Morning Briefing ",
            },
            podcast: {
              duration: "27:09",
            },
          },
          {
            __typename: "ArticleReduced",
            title: '"Es geht eine Menge nur mit Rot-Rot-Grün"',
            description:
              "SPD-Chef Norbert Walter-Borjans im Interview auf der PioneerOne.",
            slug: "es-geht-eine-menge-nur-mit-rot-rot-gruen",
            headerImage: {
              url:
                "//image-service.thepioneer.de/show/mj324dykhxwi/6MRsgzZRUyOP7BHTcBl0VH/f67eeeb43f204f8b8e39f9f40deb5c76/131333952.jpg",
              alt: "Norbert Walter-Borjans",
              width: 8256,
              height: 5504,
            },
            createdAt: "2020-07-14T20:17:49.302Z",
            authors: [
              {
                id: "QXV0aG9yLWdvcmRvbi1yZXBpbnNraQ==",
                name: "Gordon Repinski",
              },
            ],
            brand: null,
            podcast: null,
          },
        ],
      },
    },
    extensions: {
      transactionId: "UXWWm4fJIGw2_wrEKaCym",
      transactionTime: 234,
    },
  }
  const data3 = data2.homepage.featured.content.slice(
    0,
    data2.homepage.featured.content.length - 1
  )
  // const data3 = data2.homepage.featured.content
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>

  return (
    <StyledSection>
      <PioneerHeadline>Blog</PioneerHeadline>
      {data.homepage.id}
      {/* <StyledGrid>
        {JSON.stringify(data.homepage.featured.content)}
        {data3.map(
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
      </StyledGrid> */}
    </StyledSection>
  )
}

export default ContentTeaser

const THEPIONEERTEASER = gql`
  query GetContent {
    homepage {
      id
    }
  }
`
