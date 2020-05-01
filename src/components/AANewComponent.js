import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

const StyledSection = styled.section`
  @media ${device.tablet} {
  }
`

const PioneerJournalism = props => (
  <StyledSection>
    <h1>Test</h1>
  </StyledSection>
)

export default PioneerJournalism
