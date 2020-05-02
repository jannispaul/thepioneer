import React from "react"
import styled from "styled-components"
import PioneerLogo from "./PioneerLogo"
import { device } from "../theme/breakpoints"

const StyledH2 = styled.h2`
  text-align: center;
  font-style: normal;
  /* padding: 0 16px; */
  font-size: 24px;
  font-family: "Poppins", "Open Sans", -apple-system, BlinkMacSystemFont, Arial,
    sans-serif;
  background: none;
  -webkit-text-fill-color: #000;
  font-weight: 300;
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
    <PioneerLogo fill={props.color}></PioneerLogo> {props.children}
  </StyledH2>
)

export default PioneerHeadline
