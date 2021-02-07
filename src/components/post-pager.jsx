import React from "react"
import { Link } from "gatsby"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const PostPager = props => {
  const { prev, next } = props

  return (
    <div>
      {prev && (
        <Link
          style={{ float: "left", paddingBottom: "100px", paddingTop: "30px" }}
          to={prev.fields.slug}
        >
          <i class="fas fa-arrow-left" /> <FaArrowLeft />
          Précedant
        </Link>
      )}
      {numberOfPages > 1 && (
        <div style={{ textAlign:"center"}} className="pager__location">
          Page {humanPageNumber} sur {numberOfPages}
        </div>
      )}
      {next && (
        <Link
          style={{ float: "right", paddingBottom: "100px", paddingTop: "30px" }}
          to={next.fields.slug}
        >
          Suivant 
          <i class="fas fa-arrow-right" /> <FaArrowRight />
        </Link>
      )}
    </div>
  )
}

export default PostPager
