import React from "react";
import { Link } from "react-router-dom";

const Post = (data) => {
  const userId = data.userId;
  const title = data.title;
  const date = new Date();
  const username = data.username;
  const description = data.description;

  return (
    <Link to={'/list-post' + userId}>
      <article className="view-all col-2">
        <div className="popular-content">
          <div className="popular-title">{title}</div>
          <div className="popular-info row">
            <div className="created-date col-4">{date}</div>
            <div className="writer col-8">{username}</div>
          </div>
          <div className="popular-desc">
            <div>{description}</div>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Post;