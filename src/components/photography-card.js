import React from "react"
import Img from "gatsby-image"

const PhotographyCard = props => {
  return (
    <div className="card photography">
      <div className="card-body">
        <Img
          className="card-img-top"
          fluid={props.image.childImageSharp.fluid}
          alt={props.title}
        />
        <h5 className="card-title">{props.title}</h5>
        <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
      </div>
    </div>
  )
}

export default PhotographyCard
