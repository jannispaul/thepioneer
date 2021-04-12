import React from "react"
import styled from "styled-components"
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

  video {
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

const HeroVideo = () => (
  <StyledSection>
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
        <source src={heroVideoMobile} type="video/mp4" />
      </video>
      <video
        loop
        muted
        playsInline
        autoPlay
        disableremoteplayback="true"
        poster={heroPoster}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
    </Container>
  </StyledSection>
)

export default HeroVideo
