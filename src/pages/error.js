import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const SecondPage = () => (
  <Layout>
    <SEO title="Zahlung fehlgeschlagen" />
    <h1>Da ist leider etwas schiefgelaufen</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
