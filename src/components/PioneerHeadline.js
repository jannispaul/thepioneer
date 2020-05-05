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
  font-weight: 300;
  margin-bottom: ${props => (props.large ? "32px" : "16px")};
  text-align: ${props => (props.center ? "center" : "left")};
  color: ${props => (props.color ? props.color : "#1f1f1f")};
  transform: ${props => (props.large ? "scale(1.5)" : "scale(1)")};
  transform-origin: 50% 50%;

  @media ${device.tablet} {
    transform: ${props => (props.large ? "scale(1.7)" : "scale(1)")};
    margin-bottom: ${props => (props.large ? "64px" : "12px")};
  }

  & svg {
    fill: currentColor;
    max-width: 140px;
    height: auto;
  }
`

const PioneerHeadline = props => (
  <StyledHeadline color={props.color} large={props.large} center={props.center}>
    <PioneerLogo fill={props.color}></PioneerLogo> {props.children}
  </StyledHeadline>
)

export default PioneerHeadline
