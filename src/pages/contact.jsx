import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"


import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
import style from "./contact.module.less"

function Contact({ intl }) {
  return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "contact.contactSEO" })} keywords={["neocracy"]} />
      <h1 style={{ textAlign: "center" }}>
        <FormattedMessage id="contact.title" />
      </h1>
      <div className={style.container}>
        <ContactForm 
          action="https://www.flexyform.com/f/42f7566f888680351bf8aa3b480c8bd3ae0090c3">
        </ContactForm>
      </div>
    </Layout>
  )
}

export default injectIntl(Contact)

