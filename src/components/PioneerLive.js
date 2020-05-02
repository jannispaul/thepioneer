import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerLogo from "../components/PioneerLogo"
import PioneerButton from "./PioneerButton"

// import PioneerHeadline from "../components/PioneerHeadline"

const StyledSection = styled.section`
  background: #1f1f1f;
  width: 100%;
  padding: 60px 16px 80px 16px;

  @media ${device.tablet} {
  }

  & > p {
    color: #000;
    text-align: center;
    margin: 0 auto 40px auto;
    max-width: 500px;
    padding: 0 16px;

    @media ${device.tablet} {
    }
  }
`
const StyledH2 = styled.h2`
  color: #fff;
  font-size: 24px;
  font-family: "Poppins", "Open Sans", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif;
  font-weight: 400;
  font-style: normal;
  background: none;
  -webkit-text-fill-color: #fff;
`

const PioneerLive = () => (
  <StyledSection>
    <StyledH2>
      <PioneerLogo fill="#fff" width="140px"></PioneerLogo> Live
    </StyledH2>

    <PioneerButton
      subline
      background="#fff"
      fill="#1F1F1F"
      color="#1F1F1F"
    ></PioneerButton>
  </StyledSection>
)

export default PioneerLive
