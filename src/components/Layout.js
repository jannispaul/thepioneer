import React from "react"
import PropTypes from "prop-types"

import "../theme/font-face.css"
import "../theme/styles.css"

import Navigation from "./Navigation"
import Footer from "./Footer"
import CookieNotice from "../components/CookieNotice"

const Layout = props => {
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
      <CookieNotice></CookieNotice>

      <Navigation></Navigation>
      <main>{props.children}</main>
      <Footer></Footer>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
