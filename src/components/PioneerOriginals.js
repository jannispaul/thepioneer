import React from "react"
import styled from "styled-components"
import Slider from "../components/Slider"

const StyledSection = styled.section`
  background: black;
  width: 100%;
`

const HeroVideo = () => (
  <StyledSection>
    <h1>Pioneer Origingals</h1>
    <Slider></Slider>
  </StyledSection>
)

export default HeroVideo
