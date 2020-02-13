import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Checkout from "../components/Checkout"
import BlogPosts from "../components/BlogPosts"
import Countdown from "../components/Countdown"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Checkout></Checkout>
    <BlogPosts></BlogPosts>
    <Countdown></Countdown>
  </Layout>
)

export default IndexPage
