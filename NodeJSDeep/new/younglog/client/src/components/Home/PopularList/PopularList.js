import { Component } from "react";
import { Link } from 'react-router-dom';
import Post from './Post'
import { render } from '@testing-library/react';

class PopularList extends Component {

  render() {
    console.log(this.props.datas);
    // date: "2021. 9. 29."
    // description: "r"
    // thumbnail: "image/zero-w-logo_mini"
    // title: "q"
    // userName: "w"
    // userPwd: "e"
    // views: 0
    // __v: 0
    // _id: "615472023afd20d3915a872f"
    return (
      <div className="popular-post-box">
        <div className="popular-header row">
          <div className="title col-10"><h1>Popular post</h1></div>
          <Link to='/list-post' className="view-all col-2">View all</Link>
        </div>
        <div className="contents-box row">
          {this.props.datas.map((data, index) => (
          <span key={index}>
            <Post data={data}/>
            <div>" -------- popular end----------- "</div>
          </span>
        ))}
        </div>
      </div>
    )
  }
}

export default PopularList;