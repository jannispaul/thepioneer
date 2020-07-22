import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import PioneerJournalism from "../components/PioneerJournalism"
import PioneerMission from "../components/PioneerMission"
import ContentTeaser from "../components/ContentTeaser"
import PioneerOriginals from "../components/PioneerOriginals"
import PioneerLive from "../components/PioneerLive"
import PioneerOne from "../components/PioneerOne"
import PrivacyAndAds from "../components/PrivacyAndAds"
import PioneerOneImage from "../components/ImageComponents/PioneerOneImage"

const IndexPage = () => (
  <Layout>
    <SEO title="Join ThePioneer" />
    <Hero></Hero>
    <PioneerMission></PioneerMission>
    <PioneerOriginals></PioneerOriginals>
    <PioneerJournalism></PioneerJournalism>
    <ContentTeaser></ContentTeaser>
    <PioneerOneImage></PioneerOneImage>
    <PioneerOne></PioneerOne>
    <PioneerLive></PioneerLive>
    <PrivacyAndAds></PrivacyAndAds>
  </Layout>
)

export default IndexPage
