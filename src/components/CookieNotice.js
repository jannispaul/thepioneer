import React from "react"
import CookieConsent from "react-cookie-consent"
// import { Link } from "gatsby"
import styled from "styled-components"
import { device } from "../theme/breakpoints"
// in your cookie banner
// import { initializeAndTrack } from "gatsby-plugin-gdpr-cookies"

const StyledContainer = styled.div`
  max-width: 100%;

  p {
    margin-bottom: 20px;
    @media ${device.tablet} {
      margin-bottom: 0;
    }
  }
  a,
  button {
    display: block;
    width: 100%;
    text-align: center;
    transform: scale(1);
    transition: all 200ms ease;
    @media ${device.tablet} {
      width: auto;
    }
  }
  button {
    width: calc(100% - 30px);
    margin: 15px;
    @media ${device.tablet} {
      width: auto;
    }
  }
  a:hover,
  button:hover {
    transition: all 200ms ease;
    transform: scale(1.05);
  }
  & > div {
    display: block !important;
    width: calc(100vw - 20px) !important;
    border-radius: 10px;
    margin: 10px;
    @media ${device.tablet} {
      max-width: 1168px;
      left: 0;
      right: 0;
      margin: 10px auto;
      display: flex !important;
      align-items: flex-end !important;
    }

    & > div {
      @media ${device.tablet} {
        display: flex;
        align-items: flex-end;
      }
    }
  }
`

const CookieNotice = () => (
  <StyledContainer>
    <CookieConsent
      debug={false}
      location="bottom"
      buttonText="Akzeptieren"
      cookieName="gatsby-gdpr-google-tagmanager"
      style={{
        background: "#1f1f1f",
        color: "#fff",
        zIndex: "200",
        padding: "20px",
        // display: "flex",
        // alignItems: "flex-end",
      }}
      buttonStyle={{
        background: "#8937f8",
        color: "#fff",
        fontWeight: "500",
        fontSize: "14px",
        padding: "12px 18px",
        border: "4px solid #8937F8",
        borderRadius: "4px",
        cursor: "pointer",
      }}
      expires={365}
    >
      <div>
        <h3 style={{ color: "#fff", fontSize: "18px", fontWeight: "500" }}>
          Cookie-Richtlinie
        </h3>
        <p style={{ fontFamily: "Noe", color: "#fff", fontSize: "19px" }}>
          ThePioneer verwendet Cookies, um die Website nutzerfreundlicher,
          effektiver und sicherer zu machen. Wenn Sie unsere Website nutzen,
          stimmen Sie der Nutzung und Speicherung von Cookies auf Ihrem Endgerät
          zu.{" "}
        </p>
      </div>
      <a
        href="https://www.thepioneer.de/s/datenschutz"
        style={{
          border: "2px solid #fff",
          borderRadius: "4px",
          color: "#fff",
          fontSize: "14px",
          fontWeight: "500",
          padding: "12px 18px",
          textDecoration: "none",
          minWidth: "maxContent !important",
          flexShrink: "0",
        }}
        aria-label="Link zum Datenschutz"
      >
        Datenschutzbestimmungen
      </a>
    </CookieConsent>
  </StyledContainer>
)

export default CookieNotice
