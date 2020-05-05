import React from "react"
import styled from "styled-components"
import { device } from "../theme/breakpoints"

import PioneerLogo from "./PioneerLogo"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledContainer = styled.div`
  transform-origin: 100% 50%;
  transform: ${props => (props.small ? "scale(0.7)" : "scale(1)")};
  & > small {
    margin-top: 10px;
    display: block;
  }
  @media ${device.tablet} {
    & > small {
      margin-top: 18px;
    }
  }
`
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  width: auto;
  padding: 8px 12px;
  text-transform: uppercase;
  text-decoration: none;
  justify-content: center;
  font-size: 21px;
  font-weight: 600;
  color: ${props => (props.color ? props.color : "#fff")};
  background: ${props => (props.background ? props.background : "#1f1f1f")};
  span {
    white-space: pre;
  }
  & > svg {
    display: inline-block;
    max-width: ${props => (props.width ? props.width : "120px")};
    height: auto;
  }
  @media ${device.tablet} {
    padding: 10px 18px;
    font-size: 24px;
    display: inline-block;
    & > svg {
      max-width: 130px;
    }
  }
  @media ${device.laptop} {
    padding: 12px 21px;
    font-size: 30px;
    & > svg {
      max-width: 168px;
    }
  }
`

const StyledIcon = styled.div`
  display: inline-block;

  & > svg {
    fill: #fff;
    height: 12px;
    width: 12px;
    margin-left: 4px;
    margin-top: -1px;
  }
  @media ${device.tablet} {
    & > svg {
      height: 14px;
      width: 14px;
      margin-top: -1px;
      margin-left: 6px;
    }
  }
  @media ${device.laptop} {
    & > svg {
      height: 18px;
      width: 18px;
      margin-top: -3px;
      margin-left: 6px;
    }
  }
`
function PioneerButton(props) {
  return (
    <StyledContainer small={props.small}>
      <StyledButton
        href="#"
        width={props.width}
        fontSize={props.fontSize}
        background={props.background}
        color={props.color}
      >
        <span>Join&nbsp;&nbsp;</span>
        <PioneerLogo
          fill={props.fill ? props.fill : "#fff"}
          width={props.width}
        />
        <StyledIcon>
          <Icon icon={ICONS.CHEVRON} />
        </StyledIcon>
      </StyledButton>
      {props.subline ? <small>Wähle selbst, wie viel du beiträgst.</small> : ""}
    </StyledContainer>
  )
}

export default PioneerButton
