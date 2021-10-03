import React from "react";
import { Link } from "react-router-dom";

const Post = (data) => {
  const userId = data.userId;
  const title = data.title;
  const date = new Date();
  const username = data.username;
  const description = data.description;

  return (
    <Link to={'/read-post' + userId} >
      <article className="row">
        <div className="thumbnail-box col-3">
          <img className="thumbnail col-3" src="<%= recentPosts[i].thumbnail %>" alt="썸네일"/>
        </div>
        <div className="recent-content col-9">
          <div className="recent-title">{title}</div>
          <div className="recent-info row">
            <div className="created-date col-3">{date}</div>
            <div className="writer col-9">{username}</div>
          </div>
          <div className="recent-desc">
            {description}
          </div>
        </div>
      </article>
    </Link>
  )
}

export default Post;