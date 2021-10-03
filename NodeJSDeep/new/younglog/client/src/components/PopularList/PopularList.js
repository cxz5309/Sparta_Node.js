import React from "react";
import { Link } from 'react-router-dom';
import Post from './Post'

const PopularList = (data) => {
  console.log(data);
  const posts = data;

  return (
    <div className="popular-post-box">
      <div className="popular-header row">
        <div className="title col-10">Popular post</div>
        <Link to='/list-post' className="view-all col-2">View all</Link>
      </div>
      <div className="contents-box row">
        {posts.map((data, index) => (
          <span key={index}>
            <Post data={data}/>
            {" / "}
          </span>
        ))}
      </div>
    </div>
  )
}

export default PopularList;