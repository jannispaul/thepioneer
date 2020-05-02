import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
import PioneerButton from "./PioneerButton"
import lock from "../images/svgs/lock.svg"
import noAds from "../images/svgs/no-ads.svg"

const StyledSection = styled.section`
  padding-bottom: 20px;
  span {
    text-transform: uppercase;
  }
  img {
    display: block;
    margin-bottom: 12px;
  }
`
const StyledHalf = styled.div`
  padding: 48px 16px;
  background: #f8f6fd;
  img {
    max-width: 40px;
  }
`
const StyledOtherHalf = styled.div`
  padding: 32px 16px;
  background: #fff;
  img {
    max-width: 60px;
  }
`

const StyledButtonContainer = styled.div`
  margin: auto;
  max-width: calc(100vw - 32px);
  text-align: center;
  span {
    font-size: 14px;
    color: #8c8c8c;
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
  font-size: 30px;
  margin-bottom: 16px;

  @media (${device.tablet}) {
    font-size: 60px;
    margin-bottom: 21px;
  }
`
const PrivacyAndAds = () => (
  <StyledSection>
    <StyledHalf>
      <img src={lock} alt="" /> <StyledHeadline>Privacy</StyledHeadline>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dict
      </p>
    </StyledHalf>
    <StyledOtherHalf>
      <img src={noAds} alt="" />
      <StyledHeadline>Werbefreiheit</StyledHeadline>
      <p>
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
        ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis
        dis parturient montes, nascetur ridiculus mus. Donec quam felis,
        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
        Nullam dict
      </p>
    </StyledOtherHalf>
    <StyledButtonContainer>
      <PioneerButton subline></PioneerButton>
    </StyledButtonContainer>
  </StyledSection>
)
export default PrivacyAndAds
