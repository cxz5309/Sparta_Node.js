import React from "react";
import { Link } from 'react-router-dom';
import Post from './Post'

const RecentList = (data) => {

  const posts = data;

  return (
    <div className="recent-post-box">
      <div className="recent-header row">
        <div className="title col-10">Recent post</div>
        <Link to='/list-post' className="view-all col-2">View all</Link>
      </div>
      <div className="contents-box">
        {posts.map((data, index) => (
          <span key={index}>
            <Post data={data} />
            {" / "}
          </span>
        ))}
      </div>
    </div>
  )
}

export default RecentList;