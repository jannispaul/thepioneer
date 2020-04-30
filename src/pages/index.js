import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Countdown from "../components/Countdown"
import Hero from "../components/Hero"
import PioneerOriginals from "../components/PioneerOriginals"
import PioneerExperience from "../components/PioneerExperience"
import PioneerOne from "../components/PioneerOne"
import PioneerOneImage from "../components/ImageComponents/PioneerOneImage"

const IndexPage = () => (
  <Layout>
    <SEO title="ThePioneer" />
    <Countdown></Countdown>
    <Hero></Hero>
    <PioneerOriginals></PioneerOriginals>
    <PioneerOne></PioneerOne>
    <PioneerOneImage></PioneerOneImage>
    <PioneerExperience></PioneerExperience>
  </Layout>
)

export default IndexPage
