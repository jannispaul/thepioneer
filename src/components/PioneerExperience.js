import React from "react"
import styled from "styled-components"
import PioneerHeadline from "../components/PioneerHeadline"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  background: #fff;
  width: 100%;
  padding: 60px 0 80px 0;

  @media ${device.tablet} {
    padding: 80px 0 100px 0;
  }

  & > p {
    color: #000;
    text-align: center;
    margin: 0 auto 40px auto;
    max-width: 500px;
    padding: 0 16px;

    @media ${device.tablet} {
      margin-bottom: 80px;
      padding: 0 16px;
    }
  }
`

const PioneerEyperience = () => (
  <StyledSection>
    <PioneerHeadline color="black">Experience</PioneerHeadline>
    <p>
      11 Tage, 9 Orte, 1 Mission:
      <br />
      Vom Ich zum Wir.
    </p>
  </StyledSection>
)

export default PioneerEyperience