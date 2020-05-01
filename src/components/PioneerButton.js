import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerLogo from "./PioneerLogo"

const StyledContainer = styled.div`
  & > small {
    text-align: center;
    margin-top: 4px;
    display: block;
  }
`
const StyledButton = styled.a`
  background: #1f1f1f;
  padding: 8px 12px;
  text-transform: uppercase;
  text-decoration: none;
  display: flex;
  justify-content: center;
  color: white;
  font-size: ${props => (props.fontSize ? props.fontSize : "21px")};
  font-weight: 600;

  & svg {
    display: block;
    max-width: ${props => (props.width ? props.width : "120px")};
    height: auto;
    @media ${device.tablet} {
    }
  }
`
function PioneerButton(props) {
  return (
    <StyledContainer>
      <StyledButton href="#" width={props.width} fontSize={props.fontSize}>
        Join&nbsp;&nbsp;
        <PioneerLogo fill="#fff" width={props.width} />
      </StyledButton>
      {props.subline ? (
        <small>Entscheide selbst, wie viel du beiträgst.</small>
      ) : (
        ""
      )}
    </StyledContainer>
  )
}

export default PioneerButton
