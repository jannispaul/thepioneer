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
  let cleanData
  console.log("test")
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error : {error.message}</p>
  // let data2 = {
  //   homepage: {
  //     __typename: "Homepage",
  //     featured: {
  //       content: [
  //         {},
  //         {
  //           __typename: "ArticleReduced",
  //           title: "Der Boxer aus Mitte ",
  //           description:
  //             "Er ist Musikmanager und Seiteneinsteiger. Joe Chialo will den Hauptstadt-Wahlkreis gewinnen. ",
  //           slug: "der-boxer-aus-mitte",
  //           headerImage: {
  //             url:
  //               "//image-service.thepioneer.de/show/mj324dykhxwi/6XuzlWEwGj6r9oT0MdtQQ2/c7cf94f5b4ff72e92b09eb3828a25a34/joe-chialo.jpg",
  //             alt: "Joe Chialo ",
  //             width: 2200,
  //             height: 1307,
  //           },
  //           createdAt: "2020-10-13T20:58",
  //           authors: [
  //             {
  //               id: "QXV0aG9yLW1pY2hhZWwtYnJvZWNrZXI=",
  //               name: "Michael Bröcker",
  //             },
  //           ],
  //           brand: null,
  //           podcast: null,
  //         },
  //         {
  //           __typename: "NewsletterReduced",
  //           title: "Auf der Suche nach dem Scholz-Effekt",
  //           description:
  //             "Olaf Scholz ist populärster Sozialdemokrat und nominierter Kanzlerkandidat. Doch es hilft kaum. ",
  //           slug: "auf-der-suche-nach-dem-scholz-effekt",
  //           headerImage: {
  //             url:
  //               "//image-service.thepioneer.de/show/mj324dykhxwi/14RN5bIcnnIWWD0e6kvhFS/453afb056e452ff98a793f9bea36c125/20201014_media_pioneer_hauptstadt_aufmacher_olaf_scholz_flagge.jpg",
  //             alt: "Scholz",
  //             width: 3000,
  //             height: 1772,
  //           },
  //           createdAt: "2020-10-13T06:30",
  //           authors: [
  //             {
  //               id: "QXV0aG9yLW1pY2hhZWwtYnJvZWNrZXI=",
  //               name: "Michael Bröcker",
  //             },
  //             {
  //               id: "QXV0aG9yLWdvcmRvbi1yZXBpbnNraQ==",
  //               name: "Gordon Repinski",
  //             },
  //           ],
  //           brand: {
  //             id: "QnJhbmQtaGF1cHRzdGFkdC1kYXMtYnJpZWZpbmc=",
  //             slug: "hauptstadt-das-briefing",
  //             title: "Hauptstadt - Das Briefing",
  //           },
  //         },
  //         {
  //           __typename: "NewsletterReduced",
  //           title: "Impfstoff-Erprobung abgebrochen",
  //           description: "Das Morning Briefing vom 14.10.2020",
  //           slug: "impfstoff-erprobung-abgebrochen",
  //           headerImage: {
  //             url:
  //               "//image-service.thepioneer.de/show/mj324dykhxwi/5m4kCQtFHWJC6Pbgk6dXwW/2ea80e14de836f5924e1c7cf2e8635fd/20201014-header-morning-briefing-media-pioneer-kanzleramt-gewitter.jpg",
  //             alt:
  //               "20201014-header-morning-briefing-media-pioneer-kanzleramt-gewitter",
  //             width: 3840,
  //             height: 2160,
  //           },
  //           createdAt: "2020-10-14T00:00",
  //           authors: [
  //             {
  //               id: "QXV0aG9yLWdhYm9yLXN0ZWluZ2FydA==",
  //               name: "Gabor Steingart",
  //             },
  //           ],
  //           brand: {
  //             id: "QnJhbmQtc3RlaW5nYXJ0cy1tb3JuaW5nLWJyaWVmaW5n",
  //             slug: "steingarts-morning-briefing",
  //             title: "Steingarts Morning Briefing",
  //           },
  //         },
  //         {
  //           __typename: "ArticleReduced",
  //           title: "Wo bleibt der Olaf-Wumms? ",
  //           description:
  //             "Olaf Scholz kann die SPD bisher nicht erwecken. Matthias Machnig ahnt, warum nicht.  ",
  //           slug: "wo-bleibt-der-olaf-wumms",
  //           headerImage: {
  //             url:
  //               "//image-service.thepioneer.de/show/mj324dykhxwi/4xB7vPuGnT3WdwuO9r2PgL/77f078350cb58ee8a9f9cd059fe13a35/20200607-header-hauptstadtbriefing-media-pioneer-scholz-football.jpg",
  //             alt: "Scholz",
  //             width: 3000,
  //             height: 1772,
  //           },
  //           createdAt: "2020-10-13T16:00",
  //           authors: [
  //             {
  //               id: "QXV0aG9yLW1hdHRoaWFzLW1hY2huaWc=",
  //               name: "Matthias Machnig ",
  //             },
  //           ],
  //           brand: null,
  //           podcast: null,
  //         },
  //       ],
  //     },
  //   },
  //   extensions: {
  //     transactionId: "kzRkKJJi6Ge34xvaU6JHl",
  //     transactionTime: 364,
  //   },
  // }

  // When data was received, delete empty objects from content
  if (data) {
    // console.log(data)
    cleanData = data.homepage.featured.content.filter(
      // Make sure data is not empty and data objects have more than 2 keys (arbitrary number)
      (value) => JSON.stringify(value) !== "{}" && Object.keys(value).length > 2
    )
  }
  return (
    <StyledSection>
      {/* {JSON.stringify(data)}
      <br />
      <br />
      {JSON.stringify(cleanData)} */}
      <HeadlineContainer>
        <div>
          <img src={stiftImage} alt="Bleistift" />
          <img src={stifteImage} alt="Mehrere Bleistifte" />
          <h2>Entdecken Sie unsere Inhalte</h2>
        </div>
      </HeadlineContainer>
      <StyledGrid>
        {cleanData
          .slice(0, 3)
          .map(
            (
              {
                title,
                description,
                slug,
                headerImage,
                createdAt,
                brand,
                authors,
                podcast,
                __typename,
              },
              index
            ) => (
              <SingleBlogPost
                key={index}
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
