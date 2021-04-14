import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import Slider from "../components/Slider"
import PioneerHeadline from "./PioneerHeadline"

import WallStreetDailyImage from "../components/ImageComponents/Originals/WallStreetDailyImage"
import UeberstundeImage from "../components/ImageComponents/Originals/UeberstundeImage"
import WorldBriefingImage from "../components/ImageComponents/Originals/WorldBriefingImage"
import MorningBriefingImage from "../components/ImageComponents/Originals/MorningBriefingImage"
import HauptstadtBriefingImage from "../components/ImageComponents/Originals/HauptstadtBriefingImage"
import TechBriefingImage from "../components/ImageComponents/Originals/TechBriefingImage"
import DerAchteTagImage from "../components/ImageComponents/Originals/DerAchteTagImage"
import RaceToTheWhiteHouseImage from "../components/ImageComponents/Originals/RaceToTheWhiteHouseImage"
import ShowroomImage from "../components/ImageComponents/Originals/ShowroomImage"

const StyledSection = styled.section`
  background: #1f1f1f;
  width: 100%;
  padding: 50px 0 80px 0;
  overflow: hidden;

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
        href="https://www.thepioneer.de/originals/morning-briefing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MorningBriefingImage></MorningBriefingImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/world-briefing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WorldBriefingImage></WorldBriefingImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/wall-street-daily"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WallStreetDailyImage></WallStreetDailyImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/die-ueberstunde"
        target="_blank"
        rel="noopener noreferrer"
      >
        <UeberstundeImage></UeberstundeImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/tech-briefing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TechBriefingImage></TechBriefingImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/race-to-the-white-house/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RaceToTheWhiteHouseImage></RaceToTheWhiteHouseImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/showroom/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ShowroomImage></ShowroomImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/der-achte-tag"
        target="_blank"
        rel="noopener noreferrer"
      >
        <DerAchteTagImage></DerAchteTagImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/hauptstadt-das-briefing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <HauptstadtBriefingImage></HauptstadtBriefingImage>
      </a>
    </Slider>
  </StyledSection>
)

export default PioneerOriginals
