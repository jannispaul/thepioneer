import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Countdown from "../components/Countdown"
import Hero from "../components/Hero"
import PioneerOriginals from "../components/PioneerOriginals"
import PioneerExperience from "../components/PioneerExperience"
import PioneerOne from "../components/PioneerOne"

const IndexPage = () => (
  <Layout>
    <SEO title="ThePioneer" />
    <Countdown></Countdown>
    <Hero></Hero>
    <PioneerOriginals></PioneerOriginals>
    <PioneerOne></PioneerOne>
    <PioneerExperience></PioneerExperience>
  </Layout>
)

export default IndexPage
