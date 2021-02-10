import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import style from "../style/global.css"

import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"

function Contact({ intl }) {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "contact.contactSEO" })} keywords={["neocracy"]} />
      <h1 style={{ textAlign: "center" }}>
        <FormattedMessage id="contact.title" />
      </h1>
      <div className={style.container}>
        <ContactForm 
          action={process.env.FLEXYFORM_URL}>
        </ContactForm>
      </div>
    </Layout>
  )
}

export default injectIntl(Contact)

