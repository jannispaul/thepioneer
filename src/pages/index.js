import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Countdown from "../components/Countdown"
import PioneerJournalism from "../components/PioneerJournalism"
import PioneerOriginals from "../components/PioneerOriginals"
import PioneerExperience from "../components/PioneerExperience"
import PioneerOne from "../components/PioneerOne"
import PrivacyAndAds from "../components/PrivacyAndAds"
import PioneerOneImage from "../components/ImageComponents/PioneerOneImage"

const IndexPage = () => (
  <Layout>
    <SEO title="ThePioneer" />
    <Hero></Hero>
    <Countdown></Countdown>
    <PioneerJournalism></PioneerJournalism>
    <PrivacyAndAds></PrivacyAndAds>
    <PioneerOriginals></PioneerOriginals>
    <PioneerOne></PioneerOne>
    <PioneerOneImage></PioneerOneImage>
    <PioneerExperience></PioneerExperience>
  </Layout>
)

export default IndexPage
