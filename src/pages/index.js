import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Checkout from "../components/Checkout"
import BlogPosts from "../components/BlogPosts"
import Countdown from "../components/Countdown"
import HeroVideo from "../components/HeroVideo"
import PioneerOriginals from "../components/PioneerOriginals"

const IndexPage = () => (
  <Layout>
    <SEO title="ThePioneer" />
    <HeroVideo></HeroVideo>
    <Checkout></Checkout>
    <PioneerOriginals></PioneerOriginals>
    <BlogPosts></BlogPosts>
    <Countdown></Countdown>
  </Layout>
)

export default IndexPage
