import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerHeadline from "./PioneerHeadline"
import PioneerButton from "./PioneerButton"

const StyledSection = styled.section`
  background: #1f1f1f;
  width: 100%;
  padding: 60px 16px 80px 16px;
  overflow: hidden;
  & > div {
    display: flex;
    flex-direction: column;
    & > p {
      color: #fff;
      text-align: center;
      max-width: 600px;
      padding: 0 16px;
      margin: -20px auto 30px;
    }
  }
  @media ${device.tablet} {
    padding: 80px 16px 80px 16px;

    & > div {
      max-width: 1168px;
      margin: auto;
    }
  }
  /* 
  & > p {
    text-align: center;
    margin: 0 auto 40px auto;
    max-width: 500px;
    padding: 0 16px;
  } */
`

const StyledButtonContainer = styled.div`
  max-width: calc(100vw - 32px);
  margin: auto;
  text-align: center;
  @media ${device.tablet} {
  }
`
const StyledIframe = styled.iframe`
  margin: 0 auto 40px;
  width: 100%;
  height: calc(56vw - 32px);
  @media ${device.tablet} {
    width: 560px;
    height: 315px;
  }
  @media ${device.laptop} {
    width: 840px;
    height: 473px;
  }
`
const PioneerLive = () => (
  <StyledSection>
    <div>
      <PioneerHeadline color="#fff" large center>
        Live
      </PioneerHeadline>
      <p>
        Live-Journalismus, Video-Streams und exklusive Einblicke in das erste
        Redaktionsschiff der Welt.
      </p>
      <StyledIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/WWG8mTglW8k?rel=0"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></StyledIframe>
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
