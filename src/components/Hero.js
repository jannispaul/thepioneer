import React from "react"
import styled from "styled-components"
import HeroImage from "./ImageComponents/HeroImage"
import PioneerLogo from "./PioneerLogo"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  position: relative;
  width: 100%;
  height: calc(100vh - 80px);
  max-height: 90vw;
  fill: white;
  @media ${device.tablet} {
    margin-top: 80px;
  }
`
const Container = styled.div`
  max-width: 1168px;
  margin: auto;
  padding: 16px;
  @media ${device.tablet} {
    padding: 48px 16px;
  }
`

const HeroVideo = () => (
  <StyledSection>
    <HeroImage></HeroImage>
    <Container>
      <PioneerLogo></PioneerLogo>
    </Container>
  </StyledSection>
)

export default HeroVideo
