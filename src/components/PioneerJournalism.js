import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import GaborAndMichaelImage from "./ImageComponents/GaborAndMichaelImage"
import PioneerButton from "./PioneerButton"
// import checkmark from "../images/svgs/checkmark.svg"
import micImage from "../images/pngs/mikrofon.png"
import PioneerHeadline from "./PioneerHeadline"
import live from "../images/svgs/live.svg"
import play from "../images/svgs/play.svg"
import newsletter from "../images/svgs/newsletter.svg"
import podcast from "../images/svgs/podcast.svg"
import check from "../images/svgs/check.svg"
import smiley from "../images/svgs/smiley.svg"
import chart from "../images/svgs/chart.svg"
import gabor from "../images/gabor-icon.png"

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
  grid-template-columns: auto auto;
  grid-gap: 20px;
  font-size: 14px;
  justify-content: center;
  margin-bottom: 2rem;
  
  
  &>div{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  @media ${device.mobileL} {
    font-size: 16px;
  }
  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr 1fr;

  }

  @media ${device.laptop} {
    justify-content: flex-start;

    &>div{
      display: flex;
      align-items: flex-start;
      flex-direction: column;
    }
  }
`
const BenefitCircles = styled.div`
  display: flex;
  & > div {
    display: flex;
    align-items: center;
    background: #ebe0fa;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: 3px solid #f8f6fe;
    position: relative;
    z-index:1;

    :nth-of-type(2){
      z-index:0;
      margin-left: -10px;
    }
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
`

const BenefitCopy = styled.p`
  text-align: center;
  font-weight: 600;
  font-family: Poppins;
  font-size: 14px;

  & > span {
    :nth-of-type(2){
      color: #6622c3;
    }
  }

  @media ${device.tablet} {
  font-size: 16px;
  }
  @media ${device.laptop} {
    text-align: left;
  }
`
const BenefitsHeadline = styled.h3`
  text-align: center;
  font-family: Poppins;
  text-transform: uppercase;
  font-size: 18px;
  color: #6622c3;
  font-weight: 600;
  margin-bottom: 2rem;

    @media ${device.laptop} {
      text-align: left;
    }

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
const StyledImage = styled.img`
  width: 100 % !important;
  height: 100 % !important;
  max-width: 100 % !important;
  max-height: 100 % !important;

`
const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;

  @media ${device.laptop} {
    display: block;
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
            <BenefitCircles>
              <div>
                <StyledImage
                  src={gabor}
                  alt="Gesicht eines Mannes – Gabor Steingart"
                />
              </div>
            </BenefitCircles>
            <BenefitCopy>
              <span>
                <b>100% Steingart</b> <br />
              </span>
              <span>
                in Text, Audio & Video
              </span>
            </BenefitCopy>
          </div>
          <div>
            <BenefitCircles>
              <div>
                <img src={newsletter} alt="Brief-Icon" />
              </div>
              <div>
                <img src={podcast} alt="Brief-Icon" />
              </div>
            </BenefitCircles>
            <BenefitCopy>
              <span>
                <b>Freier Zugriff auf</b>
                <br />
              </span>
              <span>
                Website & App
              </span>
            </BenefitCopy>
          </div>
          <div>
            <BenefitCircles>
              <div>
                <img src={live} alt="Schiff-Icon" />
              </div>
              <div>
                <img src={play} alt="Schiff-Icon" />
              </div>
            </BenefitCircles>
            <BenefitCopy>
              <span>
                <b>Live-Journalismus</b>
                <br />
              </span>
              <span>
                auf Medienschiff
              </span>
            </BenefitCopy>
          </div>
          <div>
            <BenefitCircles>
              <div>
                <img src={chart} alt="Stift-Icon" />
              </div>
            </BenefitCircles>
            <BenefitCopy>
              <span>
                <b>Über 2.500</b>
                <br />
              </span>
              <span>
                Infografiken
              </span>
            </BenefitCopy>
          </div>
          <div>
            <BenefitCircles>
              <div>
                <img src={smiley} alt="Diagramm-Icon" />
              </div>
            </BenefitCircles>
            <BenefitCopy>
              <span>
                <b>Ihr Autorenprofil</b> <br />
              </span>
              <span>
                als Pioneer Expert
              </span>
            </BenefitCopy>
          </div>
          <div>
            <BenefitCircles>
              <div>
                <img src={check} alt="Raketen-Icon" />
              </div>
            </BenefitCircles>
            <BenefitCopy>
              <span>
                <b>Unabhängig &</b> <br />
              </span>
              <span>
                100% werbefrei
              </span>
            </BenefitCopy>
          </div>
        </Benefits>
        <StyledButtonContainer>
          <PioneerButton subline></PioneerButton>
        </StyledButtonContainer>
      </StyledContainer>
    </div>
  </StyledSection >
)

export default PioneerJournalism
