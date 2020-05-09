import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerHeadline from "./PioneerHeadline"
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
  max-width: 1168px;
  margin: auto;

  img:first-of-type {
    position: absolute;
    right: -10px;
    width: 150px;
    top: 20px;
    transform: scaleX(-1);
    z-index: 0;
  }

  & p {
    margin-bottom: 20px;
  }

  h2 {
    z-index: 1;
    position: relative;
    display: block;
  }

  @media ${device.tablet} {
    padding: 40px 32px;
  }
  @media ${device.laptop} {
    padding: 80px 32px;

    h2 {
      max-width: 660px;
      margin-bottom: 40px;
    }
    p {
      margin-bottom: 50px;
      max-width: 500px;
    }
    img:first-of-type {
      /* left: calc(-50vw + 584px); */
      left: 0;
      margin-left: calc(-50vw + 500px);
      width: 18vw;
      top: 60px;
      transform: scaleX(1);
    }
  }
`
const StyledIframe = styled.iframe`
  background: #f0ecf4;
  height: 50vw;

  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12);
  background: #1f1f1f;
  margin-bottom: 20px;
  @media ${device.tablet} {
    width: 40vw;
    max-height: 25vw;
  }
  @media ${device.laptop} {
    max-width: 569px;
    height: 319px;
    float: right;
    box-shadow: 0 2px 22px rgba(0, 0, 0, 0.12);
  }
`

const PioneerJournalism = props => (
  <StyledSection>
    <StyledContainer>
      <img src={confettiImage} alt="Bleistift" />
      <PioneerHeadline color="#1f1f1f">Mission</PioneerHeadline>
      <h2>
        Celebrate the <wbr />
        opinion of others!
      </h2>
      <StyledIframe
        width="560"
        height="315"
        src="https://youtu.be/fWySFeZpNn8"
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
