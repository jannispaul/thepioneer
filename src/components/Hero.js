import React from "react"
import styled from "styled-components"
import HeroImage from "./ImageComponents/HeroImage"
import PioneerButton from "./PioneerButton"
import { device } from "../theme/breakpoints"

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
  p {
    margin-bottom: 20px;
  }
  @media ${device.tablet} {
    padding: 48px 16px;
  }
`
const StyledH1 = styled.h1``
const HeroVideo = () => (
  <StyledSection>
    {/* <HeroImage></HeroImage> */}
    <Container>
      <StyledH1>Wahrheit gibt es nur zu zweien.</StyledH1>
      <p>
        Zusammen mit Ihnen. Gemeinsam können wir den Journalismus neu beleben.
      </p>
      <PioneerButton subline></PioneerButton>
    </Container>
  </StyledSection>
)

export default HeroVideo
