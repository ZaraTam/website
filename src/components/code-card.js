import React from "react"

const CodeCard = props => {
  return (
    <div className="card code">
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div dangerouslySetInnerHTML={{ __html: props.html }}></div>
        {props.website && (
          <a
            href={props.website}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Website
          </a>
        )}
        {props.notebook && (
          <a
            href={props.notebook}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Notebook
          </a>
        )}
        {props.source && (
          <a
            href={props.source}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Source code
          </a>
        )}
      </div>
    </div>
  )
}

export default CodeCard
