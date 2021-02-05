import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Nvim from "../images/nvim.png"
import ThisBlog from "../images/this-blog.png"
import style from "./index.module.less"
import {
  FaGithub,
} from "react-icons/fa"

const IndexPage = () => {
  return (
    <Layout>
      <h1 style={{ textAlign: "center", marginTop: "80px" }}>Le Blog de Neocracy</h1>
      <SEO title="Home" keywords={["neocracy"]} />
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.content}>
            <span>
              Présentation : Blog sur le site Neocracy 
            </span>
            <div className={style.list}>
              <ul>
                <li>
                  <a
                    target="_blank"
                    rel="nofollow noopener noreferrer"
                    href={"https://github.com/e-gonzalez-ipssi/NeoCracy"}
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
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://github.com/e-gonzalez-ipssi/NeoCracy"}
            >
              <img src={Nvim} height="200px" width="200px" alt="nvim" />
            </a>
          </div>
          <div className={style.content}>
            <span>
             Ici un lien vers le depot github du site Neocracy
            </span>
          </div>
        </div>
      </div>
      <div className={style.card}>
        <div className={style.post}>
          <div className={style.cover}>
            <a
              target="_blank"
              rel="nofollow noopener noreferrer"
              href={"https://github.com/e-gonzalez-ipssi/NeoCracyBlog"}
            >
              <img src={ThisBlog} height="150px" width="225px" alt="blog" />
            </a>
          </div>
          <div className={style.content}>
            <span>
              Ici un lien vers le depot github du blog Neocracy
            </span>
          </div>
        </div>
      </div>
    </Layout>
  )
}
export default IndexPage
