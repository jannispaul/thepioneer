import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Hero from "../components/Hero"
import Countdown from "../components/Countdown"
import PioneerJournalism from "../components/PioneerJournalism"
import PioneerMission from "../components/PioneerMission"
// import PioneerContent from "../components/PioneerContent"
import PioneerOriginals from "../components/PioneerOriginals"
import PioneerLive from "../components/PioneerLive"
import PioneerOne from "../components/PioneerOne"
import PrivacyAndAds from "../components/PrivacyAndAds"
import PioneerOneImage from "../components/ImageComponents/PioneerOneImage"

const IndexPage = () => (
  <Layout>
    <SEO title="ThePioneer" />
    <Hero></Hero>
    <PioneerMission></PioneerMission>
    <Countdown></Countdown>
    <PioneerJournalism></PioneerJournalism>
    {/* <PioneerContent></PioneerContent> */}
    <PioneerOriginals></PioneerOriginals>
    <PioneerOneImage></PioneerOneImage>
    <PioneerOne></PioneerOne>
    <PioneerLive></PioneerLive>
    <PrivacyAndAds></PrivacyAndAds>
  </Layout>
)

export default IndexPage
