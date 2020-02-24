import React from "react"
import styled from "styled-components"
import Slider from "../components/Slider"
import PioneerHeadline from "../components/PioneerHeadline"
import WallStreetWeeklyImage from "../components/ImageComponents/WallStreetWeeklyImage"
import UeberstundeImage from "../components/ImageComponents/UeberstundeImage"
import BeyondTheObviousImage from "../components/ImageComponents/BeyondTheObviousImage"
import TheAmericansImage from "../components/ImageComponents/TheAmericansImage"
import MorningBriefingImage from "../components/ImageComponents/MorningBriefingImage"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  background: #1f1f1f;
  width: 100%;
  /* padding-bottom: 100px; */
  padding: 60px 0 80px 0;

  @media ${device.tablet} {
    padding: 80px 0 100px 0;
  }

  & > p {
    color: white;
    text-align: center;
    margin: 0 auto 40px auto;
    max-width: 526px;
    padding: 0 16px;

    @media ${device.tablet} {
      margin-bottom: 80px;
      padding: 0 16px;
    }
  }
`

const PioneerOriginals = () => (
  <StyledSection>
    <PioneerHeadline color="white">Origingals</PioneerHeadline>
    <p>
      Qualitätsjournalismus für eine neue Zeit: Als Briefings, Podcasts und
      Live.
    </p>
    <Slider>
      <a
        href="https://wall-street-weekly.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WallStreetWeeklyImage></WallStreetWeeklyImage>
      </a>
      <a
        href="https://ueberstunde.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UeberstundeImage></UeberstundeImage>
      </a>
      <a
        href="https://think-beyondtheobvious.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BeyondTheObviousImage></BeyondTheObviousImage>
      </a>
      <a
        href="http://the-americans.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TheAmericansImage></TheAmericansImage>
      </a>
      <a
        href="https://www.gaborsteingart.com/morning-briefing/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MorningBriefingImage></MorningBriefingImage>
      </a>
    </Slider>
  </StyledSection>
)

export default PioneerOriginals
