import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerLogo from "./PioneerLogo"

const StyledButton = styled.a`
  background: #1f1f1f;
  padding: 4px 8px;
  text-transform: uppercase;
  display: flex;
  color: white;
  & svg {
    display: block;
    max-width: 100px;
    height: auto;
    @media ${device.tablet} {
      max-width: 282px;
    }
  }
`
function PioneerButton(props) {
  return (
    <StyledButton>
      Join&nbsp;
      <PioneerLogo fill="#fff" />
    </StyledButton>
  )
}

export default PioneerButton
