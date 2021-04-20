import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import "../theme/font-face.css"
import "../theme/styles.css"

import Navigation from "./Navigation"
import Footer from "./Footer"
// import CookieNotice from "../components/CookieNotice"

const StyledMain = styled.div`
  overflow: hidden;
`

const Layout = (props) => {
  // const data = useStaticQuery(graphql`
  //   query SiteTitleQuery {
  //     site {
  //       siteMetadata {
  //         title
  //       }
  //     }
  //   }
  // `)

  return (
    <div>
      {/* <CookieNotice></CookieNotice> */}
      <Navigation></Navigation>
      <StyledMain>{props.children}</StyledMain>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
