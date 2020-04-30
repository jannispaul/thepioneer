import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerLogo from "./PioneerLogo"

const StyledNav = styled.nav`
  display: block;
  width: 100%;
  position: sticky;
  padding: 16px;
  height: auto;
  & svg {
    display: block;
    max-width: 140px;
    height: auto;
    @media ${device.tablet} {
      max-width: 282px;
    }
  }
`

const Nav = props => (
  <StyledNav>
    <PioneerLogo fill="gradient"></PioneerLogo>
  </StyledNav>
)
export default Nav
