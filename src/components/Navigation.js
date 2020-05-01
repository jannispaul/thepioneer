import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerLogo from "./PioneerLogo"
import PioneerButton from "./PioneerButton"

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: sticky;
  padding: 16px;
  height: auto;
  & > svg {
    display: block;
    max-width: 112px;
    height: auto;
    @media ${device.tablet} {
      max-width: 282px;
    }
  }
`

const Nav = props => (
  <StyledNav>
    <PioneerLogo fill="gradient"></PioneerLogo>
    <PioneerButton width="70px" fontSize="12px" />
  </StyledNav>
)
export default Nav
