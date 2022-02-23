import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import HeaderImage from "./ImageComponents/HeaderImage"
import HeaderImageMobile from "./ImageComponents/HeaderImageMobile"

const StyledSection = styled.section`
  display: block;
  position: relative;
  width: 100%;
  overflow: hidden;
`
const Container = styled.div`
  width: 100%;
  max-width: 100%;
  margin: auto;
  height: auto;

`

const HeroVideo = () => (
  <StyledSection>
    <Container>
      <HeaderImageMobile></HeaderImageMobile>
      <HeaderImage></HeaderImage>
    </Container>
  </StyledSection>
)

export default HeroVideo
