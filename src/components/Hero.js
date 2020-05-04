import React from "react"
import styled from "styled-components"
import HeroPlaceHolderImage from "./ImageComponents/HeroPlaceHolderImage"
import HeroShipImage from "./ImageComponents/HeroShipImage"
import PioneerButton from "./PioneerButton"
import { device } from "../theme/breakpoints"
import heroVideo from "../images/hero.mp4"
import hero from "../images/hero.png"
import Waves from "./ImageComponents/WavesImages"

const StyledSection = styled.section`
  display: block;
  position: relative;
  width: 100%;
  background: #f3eefb;
  @media ${device.tablet} {
  }
`
const Container = styled.div`
  max-width: 1168px;
  margin: auto;
  padding: 16px;
  position: relative;
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
  @media ${device.tablet} {
    padding: 48px 16px;
  }
`
const StyledH1 = styled.h1``
const VideoContainer = styled.div`
  position: relative;
  width: 100%;
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
          poster={hero}
        >
          <source src={heroVideo} />
        </video>
        <HeroPlaceHolderImage></HeroPlaceHolderImage>
      </VideoContainer>
      <HeroShipImage></HeroShipImage>
      <Waves></Waves>
      <StyledH1>Wahrheit gibt es nur zu zweien.</StyledH1>
      <p>
        Zusammen mit Ihnen. Gemeinsam können wir den Journalismus neu beleben.
      </p>
      <PioneerButton subline></PioneerButton>
    </Container>
  </StyledSection>
)

export default HeroVideo
