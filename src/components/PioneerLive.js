import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerHeadline from "./PioneerHeadline"
import PioneerButton from "./PioneerButton"

const StyledSection = styled.section`
  background: #1f1f1f;
  width: 100%;
  padding: 60px 16px 80px 16px;

  @media ${device.tablet} {
    & > div {
      max-width: 1168px;
      margin: auto;
    }
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

const StyledButtonContainer = styled.div`
  max-width: calc(100vw - 32px);
  margin: auto;

  @media ${device.tablet} {
    text-align: center;
  }
`

const PioneerLive = () => (
  <StyledSection>
    <div>
      <PioneerHeadline color="#fff" large center>
        Live
      </PioneerHeadline>
      <StyledButtonContainer>
        <PioneerButton
          subline
          background="#fff"
          fill="#1F1F1F"
          color="#1F1F1F"
          center
        ></PioneerButton>
      </StyledButtonContainer>
    </div>
  </StyledSection>
)

export default PioneerLive
