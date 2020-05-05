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
  overflow: hidden;

  div:first-of-type {
    background: url(${wave1}) repeat-x;
    animation: waves 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
  }
  div:last-of-type {
    background: url(${wave2}) repeat-x;
    animation: waves 12s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
    /* animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
        swell 7s ease -1.25s infinite;
      opacity: 1; */
  }
  div {
    position: absolute;
    width: 640px;
    height: 100%;
    background-size: contain;
    transform: translate3d(0, 0, 0);
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
      width: 6400px;
      transform: translate3d(0, 0, 0);
    }
    div:first-of-type {
      animation: waves 14s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite,
        swell 7s ease -1.25s infinite;
    }
    div:last-of-type {
      animation: waves 29s cubic-bezier(0.36, 0.45, 0.63, 0.53) infinite;
      /* animation: wave 7s cubic-bezier(0.36, 0.45, 0.63, 0.53) -0.125s infinite,
        swell 7s ease -1.25s infinite;
      opacity: 1; */
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
  @keyframes swell {
    0%,
    100% {
      transform: translate3d(0, 4px, 0);
    }
    50% {
      transform: translate3d(0, 0px, 0);
    }
  }
  @media ${device.tablet} {
    @keyframes waves {
      0% {
        margin-left: 0;
      }
      100% {
        margin-left: -1600px;
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
