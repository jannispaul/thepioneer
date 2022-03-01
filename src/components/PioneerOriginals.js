import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import Slider from "../components/Slider"
import PioneerHeadline from "./PioneerHeadline"

import EdleFedernImage from "../components/ImageComponents/Originals/EdleFedernImage"
import FeldHaucapImage from "../components/ImageComponents/Originals/FeldHaucapImage"
import WorldBriefingImage from "../components/ImageComponents/Originals/WorldBriefingImage"
import PioneerBriefingImage from "../components/ImageComponents/Originals/PioneerBriefingImage"
import HauptstadtBriefingImage from "../components/ImageComponents/Originals/HauptstadtBriefingImage"
import TechBriefingImage from "../components/ImageComponents/Originals/TechBriefingImage"
import DerAchteTagImage from "../components/ImageComponents/Originals/DerAchteTagImage"
import InvestmentBriefingImage from "../components/ImageComponents/Originals/InvestmentBriefingImage"
import ShowroomImage from "../components/ImageComponents/Originals/ShowroomImage"
import OekonomieBriefingImage from "../components/ImageComponents/Originals/OekonomieBriefingImage"
import SecurityBriefingImage from "../components/ImageComponents/Originals/SecurityBriefingImage"

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
        href="http://www.thepioneer.de/originals/thepioneer-briefing-business-class-edition"
        target="_blank"
        rel="noopener noreferrer"
      >
        <PioneerBriefingImage></PioneerBriefingImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/world-briefing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WorldBriefingImage></WorldBriefingImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/security-briefing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <SecurityBriefingImage></SecurityBriefingImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/feld-und-haucap"
        target="_blank"
        rel="noopener noreferrer"
      >
        <OekonomieBriefingImage></OekonomieBriefingImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/tech-briefing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <TechBriefingImage></TechBriefingImage>
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
      <a
        href="https://www.thepioneer.de/originals/edle-federn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <EdleFedernImage></EdleFedernImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/feld-und-haucap"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FeldHaucapImage></FeldHaucapImage>
      </a>
      <a
        href="https://www.thepioneer.de/originals/investment-briefing"
        target="_blank"
        rel="noopener noreferrer"
      >
        <InvestmentBriefingImage></InvestmentBriefingImage>
      </a>
    </Slider>
  </StyledSection>
)

export default PioneerOriginals
