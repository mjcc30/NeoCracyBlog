import React from "react"
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"

import Layout from "../components/layout"
import SEO from "../components/seo"

import style from "../style/global.css"

import Github from "../images/github.png"
import ThisBlog from "../images/this-blog.png"
import {
  FaGithub,
} from "react-icons/fa"


const IndexPage = ({ intl }) => {
    return (
    <Layout>
      <SEO title={intl.formatMessage({ id: "titleSEO" })} keywords={["neocracy"]} />
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>
        <FormattedMessage id="title" />
      </h1>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.content}>
            <span>
              <FormattedMessage id="description" /> 
            </span>
            <div className={style.list}>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={process.env.GIT_PROJECT_URL}
                  >
                    <FaGithub color="#FFFFFF" size="30" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={process.env.GIT_PROJECT_URL}
        >
          <div className={style.post}>
            <div className={style.cover}>
              <img src={Github} height="200px" width="200px" alt="nvim" />
            </div>
            <div className={style.content}>
              <span>
                Ici un lien vers le depot github du site Neocracy
              </span>
            </div>
          </div>
        </a>
      </div>
      <div className={style.card}>
        <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={process.env.GIT_BLOG_URL}
        >
          <div className={style.post}>
            <div className={style.cover}>
              <img src={ThisBlog} height="150px" width="225px" alt="blog" />
            </div>
            <div className={style.content}>
              <span>
                Ici un lien vers le depot github du blog Neocracy
              </span>
            </div>
          </div>
        </a>
      </div>
    </Layout>
  )
}

export default injectIntl(IndexPage)
