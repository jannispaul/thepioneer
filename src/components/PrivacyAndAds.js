import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerButton from "./PioneerButton"
import lock from "../images/svgs/lock.svg"
import noAds from "../images/svgs/no-ads.svg"

const StyledSection = styled.section`
  padding-bottom: 30px;
  span {
    text-transform: uppercase;
  }
  img {
    display: block;
    margin-bottom: 12px;
    height: 60px;
  }
  @media ${device.tablet} {
    padding-bottom: 0;
    display: flex;
    flex-wrap: wrap;
  }
`
const StyledHalf = styled.div`
  padding: 48px 16px;
  background: #f8f6fd;
  flex: 1 0 50%;

  img {
    max-width: 40px;
  }
  @media ${device.tablet} {
    padding: 80px 32px 240px;
    & > div {
      max-width: 500px;
    }
  }
  @media ${device.laptop} {
    & > div {
      float: right;
      margin-right: 50px;
    }
  }
`
const StyledOtherHalf = styled.div`
  padding: 32px 16px;
  background: #fff;
  flex: 1 0 50%;

  img {
    max-width: 60px;
  }
  @media ${device.tablet} {
    padding: 80px 32px;
    & > div {
      max-width: 500px;
    }
  }
  @media ${device.laptop} {
    & > div {
      margin-left: 50px;
    }
  }
`

const StyledButtonContainer = styled.div`
  max-width: calc(100vw - 32px);
  margin: auto;

  @media ${device.tablet} {
    text-align: center;
    margin-top: -150px;
  }
`

const StyledHeadline = styled.h2`
  display: inline-block;
  font-family: Poppins;
  font-weight: 700;
  font-style: italic;
  background: -webkit-linear-gradient(180deg, #674480, #9c2c5e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding-right: 4px;

  margin-bottom: 16px;

  @media (${device.tablet}) {
    margin-bottom: 21px;
  }
`
const PrivacyAndAds = () => (
  <StyledSection>
    <StyledHalf>
      <div>
        <img src={lock} alt="" /> <StyledHeadline>Privacy</StyledHeadline>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dict
        </p>
      </div>
    </StyledHalf>
    <StyledOtherHalf>
      <div>
        <img src={noAds} alt="" />
        <StyledHeadline>Werbefreiheit</StyledHeadline>
        <p>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dict
        </p>
      </div>
    </StyledOtherHalf>
    <StyledButtonContainer>
      <PioneerButton subline></PioneerButton>
    </StyledButtonContainer>
  </StyledSection>
)
export default PrivacyAndAds
