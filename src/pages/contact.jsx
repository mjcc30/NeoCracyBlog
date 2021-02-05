import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/contact-form"
import style from "./contact.module.less"

function Contact() {
  return (
    <Layout>
      <SEO title="Contact" keywords={["neocracy"]} />
      <h1 style={{ textAlign: "center" }}>Nous Contacter</h1>
      <div className={style.container}>
        <ContactForm action="https://www.flexyform.com/42f7566f888680351bf8aa3b480c8bd3ae0090c3"></ContactForm>
      </div>
    </Layout>
  )
}

export default Contact

