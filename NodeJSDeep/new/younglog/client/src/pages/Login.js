import { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
import { Link } from "react-router-dom";

class Login extends Component {

  componentDidMount() {
    this.getList();
  }
  getList = async () => {
    try {
      await axios.get('/api/login')
        .then((res) => {
          console.log(res.data);
        })
    }
    catch (error) {
      console.log(error);
      alert('페이지 로딩 실패!');
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <main>
        <section className="headline">
          <Link to='/create-post'>CreatePost</Link>
        </section>
      </main>
    )
  }
}

export default Login;