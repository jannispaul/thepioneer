import React from "react"
import styled from "styled-components"
import { device } from "../../theme/breakpoints"
import wave1 from "../../images/svgs/wave1.svg"
import wave2 from "../../images/svgs/wave2.svg"

const StyledContainer = styled.div`
  position: relative;
  margin: -10px -16px 20px;
  width: 100vw;
  height: 10px;

  div:first-of-type {
    background: url(${wave1}) repeat-x;
    animation: waves 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    /* transform: translate3d(0, 0, 0); */
  }
  div:last-of-type {
    background: url(${wave2}) repeat-x;
    animation: waves 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    /* transform: translate3d(0, 0, 0); */
  }
  div {
    position: absolute;
    width: 640px;
    height: 100%;
    background-size: contain !important;
  }

  @media ${device.tablet} {
    position: relative;
    width: 100vw;
    margin-top: -30px;
    left: 50%;
    right: 50%;
    margin-left: -50vw;
    margin-right: -50vw;
    height: 50px;
    & > div {
      margin: 0;
      width: 300vw;
    }
    div:first-of-type {
      animation: waves 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    }
    div:last-of-type {
      animation: waves 29s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    }
  }
  @media ${device.laptop} {
    margin-top: -40px;
    height: 70px;
  }

  @keyframes waves {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: -160px;
    }
  }

  @media ${device.tablet} {
    @keyframes waves {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -150vw;
      }
    }
  }
`

const Waves = () => (
  <StyledContainer>
    <div></div>
    <div></div>
  </StyledContainer>
)
export default Waves
