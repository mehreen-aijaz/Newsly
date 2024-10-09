import React, { Component } from "react";

export default class NewsItem extends Component {
  render() {
    let { title, description, imgUrl, newsUrl } = this.props;
    return (
      <div className="my-3 ">
        <div className="card" style={{ width: "18rem;" }}>
          <img
            src={
              !imgUrl
                ? "https://ichef.bbci.co.uk/news/1024/branded_news/f689/live/0d7210c0-5abe-11ef-bb87-f329005cdff9.jpg"
                : imgUrl
            }
            className="card-img-top"
            alt="..."
          />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <a
              href={newsUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-sm btn-dark"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}
