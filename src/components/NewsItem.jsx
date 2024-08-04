import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } =
      this.props;
    return (
      <div className="my-3">
        <div className="card">
          <span class="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'85%', zIndex:'1'}}>
            {source}
          </span>
          <img
            src={
              !imageUrl
                ? "https://th-i.thgim.com/public/incoming/nodurh/article68472383.ece/alternates/LANDSCAPE_1200/IMG_DRONE_IMAGE_-_CHOORA_2_1_M1D4OUE3.jpg"
                : imageUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title} </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text">
              <small className="text-body-secondary">
                By {!author ? "Unknown" : author} on
                {new Date(date).toGMTString()}
              </small>
            </p>
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
