import React from "react"
import styled from "styled-components"
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
    padding: 32px;

    & > div {
      max-width: 1168px;
      margin: auto;
      display: flex;
      flex-wrap: wrap;
    }
  }

  /*Links in footer*/
  a {
    text-decoration: undeline;
    text-decoration-color: rgba(0, 0, 0, 0);
    @media ${device.tablet} {
      :not(:last-of-type) {
        margin-right: 16px;
      }
    }
    :hover {
      text-decoration-color: rgba(255, 255, 255, 0.5);
    }
  }
`

const LegalLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 32px;
  @media ${device.tablet} {
    flex: 1 0 50%;
    justify-content: flex-start;
    margin-bottom: 16px;
    font-size: 20px;
  }
`
const SocialLinks = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 32px;
  @media ${device.tablet} {
    flex: 1 0 50%;
    justify-content: flex-end;
    margin-bottom: 16px;
  }
`
const StyledIcon = styled.div`
  & > svg {
    width: 24px;
    fill: #fff;
    :hover {
      fill: #a3065e;
    }
  }
`
const Backlink = styled.a`
  display: block;
  text-align: center;
  opacity: 0.8;
  margin-bottom: 20px;
  @media ${device.tablet} {
    margin-bottom: 0;
  }
`

const Footer = props => (
  <StyledFooter>
    <div>
      <LegalLinks>
        <a
          href="https://www.thepioneer.de/s/impressum"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link zum Impressum"
        >
          Impressum
        </a>
        <a
          href="https://www.thepioneer.de/s/datenschutz"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Link zum Datenschutz"
        >
          Datenschutz
        </a>
      </LegalLinks>

      <SocialLinks>
        <a
          href="https://www.instagram.com/thepioneer.one/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Pioneer auf Instagram"
        >
          <StyledIcon>
            <Icon icon={ICONS.INSTAGRAM} alt="Instagram Logo" />
          </StyledIcon>
        </a>
        {/* <a
          href="https://twitter.com/ThePioneerDE"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Pioneer auf twitter"
        >
          <StyledIcon>
            <Icon icon={ICONS.TWITTER} alt="Twitter Logo"/>
          </StyledIcon>
        </a> */}
        <a
          href="https://www.facebook.com/ThePioneerOne"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Pioneer auf Facebook"
        >
          <StyledIcon>
            <Icon icon={ICONS.FACEBOOK} alt="Facebook Logo" />
          </StyledIcon>
        </a>
        <a
          href="https://www.linkedin.com/company/thepioneer/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="The Pioneer auf LinkedIn"
        >
          <StyledIcon>
            <Icon icon={ICONS.LINKEDIN} alt="LinkedIn Logo" />
          </StyledIcon>
        </a>
      </SocialLinks>
      <Backlink
        href="https://pixel-pink.de"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Link zur PixelPink-Website"
      >
        Design und Entwicklung: PixelPink
      </Backlink>
    </div>
  </StyledFooter>
)
export default Footer
