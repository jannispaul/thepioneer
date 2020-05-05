import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import Slider from "../components/Slider"
import PioneerHeadline from "./PioneerHeadline"

import WallStreetWeeklyImage from "../components/ImageComponents/Originals/WallStreetWeeklyImage"
import UeberstundeImage from "../components/ImageComponents/Originals/UeberstundeImage"
import BeyondTheObviousImage from "../components/ImageComponents/Originals/BeyondTheObviousImage"
import TheAmericansImage from "../components/ImageComponents/Originals/TheAmericansImage"
import MorningBriefingImage from "../components/ImageComponents/Originals/MorningBriefingImage"
import HauptstadtBriefingImage from "../components/ImageComponents/Originals/HauptstadtBriefingImage"
import TechBriefingImage from "../components/ImageComponents/Originals/TechBriefingImage"
import DerAchteTagImage from "../components/ImageComponents/Originals/DerAchteTagImage"

const StyledSection = styled.section`
  background: #1f1f1f;
  width: 100%;
  padding: 50px 0 80px 0;

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
    <PioneerHeadline color="#fff" large center>
      Originals
    </PioneerHeadline>
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
      <a href="#" target="_blank" rel="noopener noreferrer">
        <DerAchteTagImage></DerAchteTagImage>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <HauptstadtBriefingImage></HauptstadtBriefingImage>
      </a>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <TechBriefingImage></TechBriefingImage>
      </a>
    </Slider>
  </StyledSection>
)

export default PioneerOriginals
