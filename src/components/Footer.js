import React from "react"
import styled from "styled-components"
// import { Link } from "gatsby"
import { device } from "../theme/breakpoints"
import Icon from "../components/Icon"
import { ICONS } from "../theme/Icons"

const StyledFooter = styled.footer`
  white-space: pre;
  padding: 32px 16px;
  background: #1f1f1f;
  color: #fff;
  font-size: 15px;
  @media ${device.tablet} {
  }

  /*Links in footer*/
  a {
    text-decoration: undeline;
    text-decoration-color: rgba(0, 0, 0, 0);

    :hover {
      text-decoration-color: rgba(255, 255, 255, 0.5);
    }
  }
`

const LegalLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 32px;
`
const StyledIcon = styled.div`
  /* margin-left: 10px; */
  & > svg {
    width: 24px;
    fill: #fff;
    :hover {
      fill: #ff0045;
    }
  }
`
const Backlink = styled.a`
  display: block;
  text-align: center;
  opacity: 0.8;
  margin-bottom: 20px;
`
const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 32px;
`

const Footer = props => (
  <StyledFooter>
    <LegalLinks>
      <a
        href="https://mediapioneer.com/impressum/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link zum Impressum"
      >
        Impressum
      </a>
      <a
        href="https://mediapioneer.com/datenschutz/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link zum Datenschutz"
      >
        Datenschutz
      </a>
    </LegalLinks>

    <SocialLinks>
      <a
        href="https://www.instagram.com/media.pioneer/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Media Pioneer on instagram"
      >
        <StyledIcon>
          <Icon icon={ICONS.INSTAGRAM} />
        </StyledIcon>
      </a>
      <a
        href="https://twitter.com/mediapioneercom"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Media Pioneer on twitter"
      >
        <StyledIcon>
          <Icon icon={ICONS.TWITTER} />
        </StyledIcon>
      </a>
      <a
        href="https://www.linkedin.com/company/media-pioneer"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Media Pioneer on linkedIn"
      >
        <StyledIcon>
          <Icon icon={ICONS.LINKEDIN} />
        </StyledIcon>
      </a>
    </SocialLinks>
    <Backlink
      href="https://pixel-pink.de"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Link zur PixelPink-Website"
    >
      Website: PixelPink
    </Backlink>
  </StyledFooter>
)
export default Footer
