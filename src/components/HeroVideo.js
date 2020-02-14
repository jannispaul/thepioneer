import React from "react"
import styled from "styled-components"

const StyledSection = styled.section`
  background: red;
`
const StyledIframe = styled.iframe`
  width: 100%;
  height: 100vh;
`

const HeroVideo = () => (
  <StyledSection>
    {/* <StyledIframe
      src="https://www.youtube.com/watch?v=pKYg3EeBTPM&feature=youtu.be"
      frameborder="0"
    ></StyledIframe> */}
    <StyledIframe
      width="560"
      // height="315"
      src="https://www.youtube-nocookie.com/embed/pKYg3EeBTPM"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></StyledIframe>
  </StyledSection>
)

export default HeroVideo
