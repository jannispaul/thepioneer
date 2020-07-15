import React from "react"
import { useQuery, gql } from "@apollo/client"

// import SingleBlogPost from "../components/SingleBlogPost"
// import PioneerHeadline from "../components/PioneerHeadline"

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

function ContentTeaser() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  return (
    <StyledGrid>
      {data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>
            {currency}: {rate}
          </p>
        </div>
      ))}
    </StyledGrid>
  )
}

export default ContentTeaser
// export const ContentTeaser = ({ data }) => {
//   return (
//     <StyledSection>
//       <PioneerHeadline>Blog</PioneerHeadline>
//       <ApolloProvider client={client}></ApolloProvider>
//       {/* <StyledGrid>
//         {data.allWordpressPost.edges.map((post) => {
//           return (
//             <SingleBlogPost
//               key={post.node.id}
//               image={
//                 post.node.featured_media.localFile.childImageSharp.resolutions
//               }
//               alt={post.node.featured_media.alt_text}
//               date={post.node.date}
//               title={post.node.title}
//               link={post.node.link}
//             ></SingleBlogPost>
//           )
//         })}
//       </StyledGrid> */}
//     </StyledSection>
//   )
// }

const EXCHANGE_RATES = gql`
  query GetExchangeRates {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`
