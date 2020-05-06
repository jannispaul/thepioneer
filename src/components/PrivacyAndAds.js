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
        <img src={lock} alt="Sicherheitsschloss Icon" />{" "}
        <StyledHeadline>Privacy</StyledHeadline>
        <p>
          Wir schreiben Datenschutz groß und deshalb erheben wir auf{" "}
          <a href="https://thepioneer.de">ThePioneer.de</a> lediglich dann
          Daten, wenn sie dazu beitragen die Webseite nutzerfreundlicher,
          effektiver und sicherer zu machen. Seien Sie sich gewiss, dass wir
          Ihre Daten niemals an Dritte verkaufen.
        </p>
      </div>
    </StyledHalf>
    <StyledOtherHalf>
      <div>
        <img src={noAds} alt="Durchgestrichene Werbung Icon" />
        <StyledHeadline>Werbefreiheit</StyledHeadline>
        <p>
          Der Kern vom Kern unserer journalistischen Arbeit ist die
          Unabhängigkeit, insbesondere die von politischen Parteien, Verbänden
          und Werbeindustrie. Darum wollen wir ein Geschäftsmodell etablieren,
          das auf Werbeerlöse verzichtet – denn wirtschaftliche Abhängigkeiten
          sind mit dem Ziel strikter Unabhängigkeit nicht vereinbar.
        </p>
      </div>
    </StyledOtherHalf>
    <StyledButtonContainer>
      <PioneerButton subline></PioneerButton>
    </StyledButtonContainer>
  </StyledSection>
)
export default PrivacyAndAds
