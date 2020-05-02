import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerLogo from "./PioneerLogo"

const StyledSection = styled.div`
  & > small {
    /* text-align: center; */
    margin-top: 10px;
    display: block;
  }
`
const StyledButton = styled.a`
  background: ${props => (props.background ? props.background : "#1f1f1f")};
  padding: 8px 12px;
  text-transform: uppercase;
  text-decoration: none;
  display: inline;
  justify-content: center;
  color: ${props => (props.color ? props.color : "#fff")};
  font-size: ${props => (props.fontSize ? props.fontSize : "21px")};
  font-weight: 600;

  & svg {
    display: inline-block;
    max-width: ${props => (props.width ? props.width : "120px")};
    height: auto;
    @media ${device.tablet} {
    }
  }
`
function PioneerButton(props) {
  return (
    <StyledSection>
      <StyledButton
        href="#"
        width={props.width}
        fontSize={props.fontSize}
        background={props.background}
        color={props.color}
      >
        Join&nbsp;&nbsp;
        <PioneerLogo
          fill={props.fill ? props.fill : "#fff"}
          width={props.width}
        />
      </StyledButton>
      {props.subline ? <small>Wähle selbst, wie viel du beiträgst.</small> : ""}
    </StyledSection>
  )
}

export default PioneerButton
