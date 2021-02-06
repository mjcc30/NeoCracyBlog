import React from "react"

import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = ({ intl }) => (
  <Layout>
    <SEO title={intl.formatMessage({ id: "notfound.404SEO" })} />
    <h1><FormattedMessage id="notfound.header" /></h1>
    <p><FormattedMessage id="notfound.description" /></p>
  </Layout>
)

export default injectIntl(NotFoundPage)
