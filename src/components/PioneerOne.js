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
    padding: 32px;

    & > img {
      width: 15vw;
      top: 50px;
    }
  }
  @media ${device.laptop} {
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
      <PioneerHeadline color="#1f1f1f">One</PioneerHeadline>
      <h2>Live-Journalismus im Herzen der Hauptstadt</h2>
      <p>
        Herzlich willkommen auf ThePioneer One. An Bord des ersten Medienschiffs
        der Welt begeben wir uns täglich auf eine Expedition in die Erkenntnis
        und suchen gemeinsam nach unbequemen Wahrheiten. Als Pioneer sind Sie in
        unserem schwimmenden Newsroom herzlich willkommen – digital oder live an
        Bord.
      </p>
      <PioneerButton subline></PioneerButton>
    </ContentContainer>
    <DragShip></DragShip>
  </StyledSection>
)

export default PioneerOne
