import React from "react"
import styled from "styled-components"
import PioneerLogo from "./PioneerLogo"
import { device } from "../theme/breakpoints"

const StyledH2 = styled.h2`
  text-align: center;
  color: ${props => (props.color ? props.color : "#000")};
  margin-bottom: 16px;

  @media ${device.tablet} {
    margin-bottom: 24px;
  }

  & svg {
    fill: currentColor;
    max-width: 140px;
    height: auto;
    @media ${device.tablet} {
      max-width: 282px;
    }
  }
`

const PioneerHeadline = props => (
  <StyledH2 color={props.color}>
    <PioneerLogo></PioneerLogo> {props.children}
  </StyledH2>
)

export default PioneerHeadline