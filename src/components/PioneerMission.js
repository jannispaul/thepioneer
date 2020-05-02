import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerLogo from "./PioneerLogo"
import PioneerButton from "./PioneerButton"
import confettiImage from "../images/pngs/konfetti.png"

const StyledSection = styled.section`
  overflow: hidden;
  @media ${device.tablet} {
  }
`
const StyledContainer = styled.div`
  padding: 40px 16px;
  position: relative;

  img:first-of-type {
    position: absolute;
    right: -10px;
    width: 150px;
    top: 20px;
    user-drag: none;
    transform: scaleX(-1);
    z-index: 0;
  }

  & p {
    margin-bottom: 20px;
  }

  h2 {
    z-index: 1;
    position: relative;
  }
`
const StyledIframe = styled.iframe`
  height: auto;
  background: #f0ecf4;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  background: #1f1f1f;
  margin-bottom: 20px;
`

const PioneerJournalism = props => (
  <StyledSection>
    <StyledContainer>
      <img src={confettiImage} alt="Bleistift" />
      <span>
        <PioneerLogo width="100px"></PioneerLogo> Mission
      </span>
      <h2>Celebrate the opinion of others!</h2>
      <StyledIframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/arynwvLg6Y8"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></StyledIframe>
      <p>
        Verliert der Journalismus an Vitalität, verliert auch die Demokratie.
        Wir wollen das Selbstgespräch der Medien beenden und die Starrköpfigkeit
        ihrer Macher aufbrechen. Die Meinung des anderen gehört nicht verboten,
        auch nicht diffamiert oder ausgegrenzt, sondern zelebriert. Wir machen
        uns auf, den Journalismus mit Unabhängigkeit und frischem Geist neu zu
        beleben.
      </p>
      <PioneerButton subline></PioneerButton>
    </StyledContainer>
  </StyledSection>
)

export default PioneerJournalism
