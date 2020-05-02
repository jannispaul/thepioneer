import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import GaborAndMichaelImage from "./ImageComponents/GaborAndMichaelImage"
import PioneerLogo from "./PioneerLogo"
import PioneerButton from "./PioneerButton"
import checkmark from "../images/svgs/checkmark.svg"
import micImage from "../images/pngs/mikrofon.png"

const StyledSection = styled.section`
  background: #f8f6fd;
  @media ${device.tablet} {
  }
`
const StyledContainer = styled.div`
  padding: 40px 16px;
  position: relative;

  img {
    position: absolute;
    right: 0;
    width: 60px;
    top: 100px;
    user-drag: none;
    user-select: none;
  }

  & p {
    margin-bottom: 20px;
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
    background: no-repeat 0 2px url(${checkmark});
    background-size: 16px 16px;
    display: inline-block;
    margin-right: 8px;
  }
`

const PioneerJournalism = props => (
  <StyledSection>
    <GaborAndMichaelImage></GaborAndMichaelImage>
    <StyledContainer>
      <img src={micImage} alt="Airplanes flying away from headline" />

      <span>
        <PioneerLogo width="100px"></PioneerLogo> Journalismus
      </span>
      <h2>Seperating News From Noise</h2>
      <p>
        Werde Teil unseres internationalen Teams aus leidenschaftlichen
        Journalisten und Experten und unterstütze eine neue Form des
        kollaborativen, werbefreien Politik- und Wirtschaftsjournalismus.
      </p>
      <ul>
        <li>Täglich neue Briefings, Podcasts, Graphics und Live-Inhalte</li>
        <li>
          Exklusiver Live-Journalismus auf dem ersten Redaktionsschiff der Welt
          – <PioneerLogo width="100px"></PioneerLogo> <span>One</span>
        </li>
        <li>
          Publikation eigener Inhalte als verifizierter{" "}
          <PioneerLogo width="100px"></PioneerLogo> Author
        </li>
        <li>Unterstützung neuer journalistischer Projekte</li>
      </ul>
      <PioneerButton subline></PioneerButton>
    </StyledContainer>
  </StyledSection>
)

export default PioneerJournalism
