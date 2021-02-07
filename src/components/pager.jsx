import React from "react"
import { Link } from "gatsby"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa"

const Pager = ({ pageContext }) => {
  const { 
    previousPagePath, 
    nextPagePath,
    humanPageNumber,
    numberOfPages
  } = pageContext

  return (
    <div>
      {previousPagePath && (
        <Link
          style={{ float: "left", paddingBottom: "100px", paddingTop: "30px" }}
          to={previousPagePath}
        >
          <FaArrowLeft /> Précedant{" "}
        </Link>
      )}
      {numberOfPages > 1 && (
        <div style={{ textAlign:"center"}} className="pager__location">
          Page {humanPageNumber} sur {numberOfPages}
        </div>
      )}
      {nextPagePath && (
        <Link
          style={{ float: "right", paddingBottom: "100px", paddingTop: "30px" }}
          to={nextPagePath}
        >
          Suivant <FaArrowRight />
        </Link>
      )}
    </div>
  )
}

export default Pager
