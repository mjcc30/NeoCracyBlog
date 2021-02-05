import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import PostPager from "../components/post-pager"
import style from "./blog-post.module.less"
import "katex/dist/katex.min.css"
import "../style/prism-darcula.less"
import loadable from "@loadable/component"
import "@suziwen/gitalk/dist/gitalk.css"

function BlogPost(props) {
  const { title, image, tags } = props.data.markdownRemark.frontmatter
  const { prev, next } = props.pageContext
  const { id } = props.data.markdownRemark

  const comments = () => {
    if (typeof window !== "undefined") {
      const GitalkComponent = loadable(() =>
        import("gitalk/dist/gitalk-component")
      )

      return (
        <GitalkComponent
          options={{
            clientID: "0f760ab0fd138bf276f1",
            clientSecret: "c838baf25cc728f9caed8fa37d870ef77d1ff0b6",
            repo: "NeoCracyBlog_comments",
            owner: "mjcc30",
            admin: ["mjcc30"],
            id: id,
            title: title,
            distractionFreeMode: false,
          }}
        />
      )
    } else {
      // if window does not exist

      return null
    }
  }

  return (
    <Layout>
      <div>
        {image && (
          <Img
            style={{ backgroundColor: "#1e2127" }}
            fluid={image.childImageSharp.fluid}
          />
        )}
        <h1 style={{ backgroundColor: "#1e2127", textAlign: "left" }}>
          {title}
        </h1>
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
          className={style.markdownBody}
        />
        <div className={style.markdownBody}>
          <br />
          <span>Tagged in </span>
          {tags.map((tag, i) => (
            <a href={`/${tag}`} key={i} style={{ marginLeft: "10px" }}>
              {tag}
            </a>
          ))}
        </div>
        <PostPager prev={prev && prev.node} next={next && next.node} />
      </div>
      <div style={{ marginTop: "6em", paddingBottom: "6em" }}>{comments()}</div>
    </Layout>
  )
}

export default BlogPost

export const query = graphql`
  query PostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt
      frontmatter {
        title
        tags
        image {
          childImageSharp {
            resize(width: 1000, height: 420) {
              src
            }
            fluid(maxWidth: 786) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
