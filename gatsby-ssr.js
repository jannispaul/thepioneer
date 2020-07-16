/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from "react"
import fetch from "isomorphic-fetch"
import {
  ApolloProvider,
  ApolloClient,
  HttpLink,
  InMemoryCache,
} from "@apollo/client"

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    fetch,
    uri: "https://www.thepioneer.de/api/graphql",
    // uri: "https://48p1r2roz4.sse.codesandbox.io",
    // uri: "https://api.graph.cool/simple/v1/ciyz901en4j590185wkmexyex",
    // uri: "https://countries.trevorblades.com/",
  }),
})

export const wrapRootElement = ({ element }) => (
  <ApolloProvider client={client}>{element}</ApolloProvider>
)
