import React from "react"
import styled from "styled-components"
import PioneerLogo from "./PioneerLogo"
import { device } from "../theme/breakpoints"

const StyledHeadline = styled.span`
  display: block;
  font-style: normal;
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
    }
  }
`

const PioneerHeadline = props => (
  <StyledHeadline color={props.color}>
    <PioneerLogo fill={props.color}></PioneerLogo> {props.children}
  </StyledHeadline>
)

export default PioneerHeadline
