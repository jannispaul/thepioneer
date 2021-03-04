import React from "react"
import styled from "styled-components"
import HeroPlaceHolderImage from "./ImageComponents/HeroPlaceHolderImage"
import HeroShipImage from "./ImageComponents/HeroShipImage"
import PioneerButton from "./PioneerButton"
import { device } from "../theme/breakpoints"
import heroVideo from "../images/hero.mp4"
// import heroVideoWEBM from "../images/hero.webm"
// import hero from "../images/hero.png"
import Waves from "./ImageComponents/WavesImages"

const StyledSection = styled.section`
  display: block;
  position: relative;
  width: 100%;
  background: #f3eefb;
`
const Container = styled.div`
  max-width: 1168px;
  margin: auto;
  padding: 16px;
  position: relative;

  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
    padding: 70px 24px 0;
  }

  p {
    margin-bottom: 20px;
  }
  video {
    width: 83%;
    left: 0;
    right: 5px;
    margin: auto;
    top: 10%;
    z-index: 10;
    position: absolute;
  }
`
const StyledH1 = styled.h1``
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  @media ${device.tablet} {
    width: 50%;
    order: 2;
  }
`
const ContentContainer = styled.div`
  @media ${device.tablet} {
    order: 1;
    max-width: 50%;
  }
`
const ShipContainer = styled.div`
  @media ${device.tablet} {
    order: 3;
    width: 100%;
    margin-top: -50px;
    margin-bottom: -20px;
  }
`

const HeroVideo = () => (
  <StyledSection>
    {/* <HeroImage></HeroImage> */}
    <Container>
      <VideoContainer>
        <video
          loop
          muted
          playsInline
          autoPlay
          disableremoteplayback="true"
          // poster={hero}
        >
          <source src={heroVideo} />
          {/* <source src={heroVideoWEBM} /> */}
        </video>
        <HeroPlaceHolderImage></HeroPlaceHolderImage>
      </VideoContainer>
      <ShipContainer>
        <HeroShipImage></HeroShipImage>
        <Waves></Waves>
      </ShipContainer>
      <ContentContainer>
        <StyledH1>Wahrheit gibt es nur zu zweien.</StyledH1>
        <p>
          Zusammen mit Ihnen. Gemeinsam können wir den Journalismus neu beleben.
        </p>
        <PioneerButton subline></PioneerButton>
      </ContentContainer>
    </Container>
  </StyledSection>
)

export default HeroVideo
