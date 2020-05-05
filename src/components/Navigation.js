import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerLogo from "./PioneerLogo"
import PioneerButton from "./PioneerButton"

const StyledNav = styled.nav`
  position: sticky;
  width: 100%;
  z-index: 100;
  background: #fff;
  height: auto;
  & > div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px;
    & > svg {
      display: block;
      max-width: 112px;
      max-height: 16px;
    }
  }
  @media ${device.tablet} {
    & > div {
      max-width: 1168px;
      margin: auto;
      padding: 20px 32px;
      & > svg {
        max-width: 200px;
        max-height: 28px;
      }
    }
  }
  @media ${device.laptop} {
    & > div {
      padding: 24px 32px;
      & > svg {
        max-width: 280px;
        max-height: 38px;
      }
    }
  }
`

const Nav = props => (
  <StyledNav>
    <div>
      <PioneerLogo fill="gradient"></PioneerLogo>
      <PioneerButton small />
    </div>
  </StyledNav>
)
export default Nav
