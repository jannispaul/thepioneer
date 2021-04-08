import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import GaborAndMichaelImage from "./ImageComponents/GaborAndMichaelImage"
import PioneerLogo from "./PioneerLogo"
import PioneerButton from "./PioneerButton"
import checkmark from "../images/svgs/checkmark.svg"
import micImage from "../images/pngs/mikrofon.png"
import PioneerHeadline from "./PioneerHeadline"
import ship from "../images/svgs/ship.svg"
import microphone from "../images/svgs/microphone.svg"
import rocket from "../images/svgs/rocket.svg"
import pencil from "../images/svgs/pencil.svg"
import chart from "../images/svgs/chart.svg"

const StyledSection = styled.section`
  background: #f8f6fd;
  overflow: hidden;
  @media ${device.tablet} {
    padding: 0 32px 60px 32px;
  }
  @media ${device.laptop} {
    padding: 60px 32px;

    & > div {
      max-width: 1168px;
      display: flex;
      margin: auto;
      align-items: center;
    }
  }
`
const Benefits = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin: 20px 0 40px;
  grid-gap: 20px;
  font-size: 14px;

  @media ${device.mobileL} {
    font-size: 16px;
  }

  @media ${device.tablet} {
    grid-template-columns: 1.1fr 1fr;
    margin: 20px 0 50px;
  }

  & > div {
    display: flex;
    align-items: center;

    & b {
      font-weight: 600;
    }
    & > div {
      background: #ebe0fa;
      border-radius: 50%;
      width: 50px;
      height: 50px;
      margin-right: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-shrink: 0;
      @media ${device.mobileM} {
        width: 70px;
        height: 70px;
      }
      & > img {
        width: 20px;
        max-height: 22px;
        @media ${device.mobileM} {
          width: 28px;
          max-height: 34px;
        }
      }
    }
  }
`
const BenefitsHeadline = styled.h3`
  font-family: Poppins;
  text-transform: uppercase;
  font-size: 18px;
  color: #6622c3;
  font-weight: 600;
`
const StyledContainer = styled.div`
  padding: 40px 16px;
  position: relative;

  & > img {
    position: absolute;
    right: 0;
    width: 60px;
    top: 100px;
    z-index: 0;
  }

  & p {
    margin-bottom: 20px;
    max-width: 700px;
    z-index: 1;
    position: relative;
  }

  & li {
    font-weight: 600;
    padding-left: 24px;
    margin-bottom: 20px;

    :last-of-type {
      margin-bottom: 32px;
    }
    span {
      font-family: " Poppins ", " Open Sans
        ", -apple-system,
        BlinkMacSystemFont, Arial, sans-serif;
      text-transform: uppercase;
      font-weight: 400;
    }
  }
  & li::before {
    margin-left: -24px;
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background: no-repeat 0 1px url(${checkmark});
    background-size: 16px 16px;
    display: inline-block;
    margin-right: 8px;
  }
  @media ${device.tablet} {
    padding: 40px 0;
    & li {
      font-size: 18px;
    }
    & > img {
      margin-right: -32px;
      width: 15vw;
      top: 50px;
    }
  }
  @media ${device.laptop} {
    max-width: 55%;
    & li {
      font-size: 19px;
    }
    & > img {
      position: absolute;
      right: calc(580px - 50vw);
      width: 15vw;
      top: 100px;
    }
  }
`

const PioneerJournalism = (props) => (
  <StyledSection>
    <div>
      <GaborAndMichaelImage></GaborAndMichaelImage>
      <StyledContainer>
        <img src={micImage} alt="Airplanes flying away from headline" />
        <PioneerHeadline>Journalismus</PioneerHeadline>
        <h2>Separating News From Noise</h2>
        <p>
          Werde jetzt Pioneer und unterstütze eine neue Form des kollaborativen,
          werbefreien Politik- und Wirtschaftsjournalismus.
        </p>
        <br />
        <BenefitsHeadline>Ihre Vorteile als Pioneer</BenefitsHeadline>
        <Benefits>
          <div>
            <div>
              <img src={ship} alt="" />
            </div>
            <span>
              <b>Steingarts Morning Briefing</b> <br />
              inklusive aller Spezial-Inhalte
            </span>
          </div>
          <div>
            <div>
              <img src={microphone} alt="" />
            </div>
            <span>
              <b>Alle Briefings & Podcasts</b>
              <br />
              wie Tech, Hauptstadt oder World Briefing 
            </span>
          </div>
          <div>
            <div>
              <img src={ship} alt="" />
            </div>
            <span>
              <b>Live-Journalismus</b>
              <br />
              auf dem ersten Medienschiff der Welt
            </span>
          </div>
          <div>
            <div>
              <img src={pencil} alt="" />
            </div>
            <span>
              <b>ThePioneer Expert</b>
              <br />
              werden und eigene Inhalte publizieren
            </span>
          </div>
          <div>
            <div>
              <img src={chart} alt="" />
            </div>
            <span>
              <b>>2.500 Infografiken</b> <br />
              im digitalen Graphic-Hub
            </span>
          </div>
          <div>
            <div>
              <img src={rocket} alt="" />
            </div>
            <span>
              <b>Unterstützung</b> <br />
              neuer journalistischer Pioneer-Projekte
            </span>
          </div>
        </Benefits>
        {/* <ul>
          <li>Täglich neue Briefings, Podcasts, Graphics und Live-Inhalte</li>
          <li>
            Exklusiver Live-Journalismus auf dem ersten Redaktionsschiff der
            Welt – <PioneerLogo width="100px"></PioneerLogo> <span>One</span>
          </li>
          <li>
            Publikation eigener Inhalte als verifizierter{" "}
            <PioneerLogo width="100px"></PioneerLogo> Expert
          </li>
          <li>Unterstützung neuer journalistischer Projekte</li>
        </ul>*/}
        <PioneerButton subline></PioneerButton>
      </StyledContainer>
    </div>
  </StyledSection>
)

export default PioneerJournalism
