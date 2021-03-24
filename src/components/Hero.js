import React from "react"
import styled from "styled-components"
import PioneerButton from "./PioneerButton"
import { device } from "../theme/breakpoints"
import heroVideo from "../images/hero-cinemagraph.mp4"
import heroVideoMobile from "../images/hero-cinemagraph-mobile.mp4"
// import heroVideoWEBM from "../images/hero.webm"
 import heroPoster from "../images/hero-cinemagraph.jpg"
 import heroPosterMobile from "../images/hero-cinemagraph-mobile.jpg"

const StyledSection = styled.section`
  display: block;
  position: relative;
  width: 100%;
`
const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: auto;
  height: 100vw;
  /* height: 80vh; */

  video {
    /* position: absolute; */
    /* min-width: 100%; */
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: -1;
  }
  video:last-of-type {
    display: none;
  }
  video:first-of-type {
    display: block;
  }
  @media ${device.tablet} {
    height: 56.52vw;
    video:first-of-type {
      display: none;
    }
    video:last-of-type {
      display: block;
    }
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
// const ShipContainer = styled.div`
//   @media ${device.tablet} {
//     order: 3;
//     width: 100%;
//     margin-top: -50px;
//     margin-bottom: -20px;
//   }
// `

const HeroVideo = () => (
  <StyledSection>
    {/* <HeroImage></HeroImage> */}
    <Container>
     <video
        loop
        muted
        playsInline
        autoPlay
        disableremoteplayback="true"
        poster={heroPosterMobile}
        preload="auto"
      >
        <source src={heroVideoMobile} type="video/mp4"/>
        {/* <source src={heroVideoWEBM} /> */}
      </video>
      <video
        loop
        muted
        playsInline
        autoPlay
        disableremoteplayback="true"
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4"/>
        {/* <source src={heroVideoWEBM} /> */}
      </video>
     
      {/* <ContentContainer>
        <StyledH1>Wahrheit gibt es nur zu zweien.</StyledH1>
        <p>
          Zusammen mit Ihnen. Gemeinsam können wir den Journalismus neu beleben.
        </p>
        <PioneerButton subline></PioneerButton>
      </ContentContainer> */}
    </Container>
  </StyledSection>
)

export default HeroVideo
