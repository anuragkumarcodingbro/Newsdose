import React from "react";

const NewsItem = (props) => {
  let { title, description, urlToImage, newsUrl, author, date, source } = props;
  return (
    <div className="my-3 ">
      <div className="card">
        <img src={urlToImage} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">
            {title}
            <span
              class="position-absolute top-0 start-90 translate-middle badge rounded-pill bg-danger"
              style={{ left: "80%", zIndex: "5" }}
            >
              {source}
            </span>{" "}
          </h5>
          <p className="card-text">{description}</p>

          <p className="card-text">
            <small className="text-muted">
              {" "}
              By : {!author ? "unknown" : author} on{" "}
              {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            href={newsUrl}
            rel="noreferrer"
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
