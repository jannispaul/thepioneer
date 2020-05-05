import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerHeadline from "./PioneerHeadline"
import DragShip from "./DragShip"
import PioneerButton from "./PioneerButton"
import flagImage from "../images/pngs/fahne.png"

const StyledSection = styled.section`
  position: relative;
  background: #fff;
  max-width: 100%;
  padding: 40px 0 60px 0;
  overflow: hidden;
  h2 {
    z-index: 1;
    position: relative;
  }
  p {
    margin-bottom: 32px;
  }
  @media ${device.tablet} {
    padding: 80px 0 100px 0;
    h2 {
      max-width: 800px;
    }
    p {
      max-width: 500px;
    }
  }
`
const ContentContainer = styled.div`
  padding: 16px;
  margin-bottom: 20px;
  & > img {
    position: absolute;
    right: 0;
    width: 110px;
    top: 50px;
    user-select: none;
    transform: rotate(-15deg);
    z-index: 0;
  }
  @media ${device.tablet} {
    max-width: 1168px;
    margin: auto;

    & > img {
      left: 0;
      width: 12vw;
      top: 50px;
      transform: rotate(0deg);
      transform: scaleX(-1);
    }
  }
`
const PioneerOne = () => (
  <StyledSection>
    <ContentContainer>
      <img src={flagImage} alt="Airplanes flying away from headline" />
      <PioneerHeadline color="black">One</PioneerHeadline>
      <h2>Live-Journalismus im Herzen der Hauptstadt</h2>
      <p>
        Herzlich Willkommen auf ThePioneer One. An Bord des ersten
        Redaktionsschiffs der Welt begeben wir uns auf eine Expedition in die
        Erkenntnis und suchen gemeinsam nach unbequemen Wahrheiten. Bei mehreren
        Live-Events pro Woche diskutieren wir gemeinsam mit Ihnen – und
        verwandeln den schwimmenden Newsroom so zum demokratischsten Ort des
        Landes.
      </p>
      <PioneerButton subline></PioneerButton>
    </ContentContainer>
    <DragShip></DragShip>
  </StyledSection>
)

export default PioneerOne
