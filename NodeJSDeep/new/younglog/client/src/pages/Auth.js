import { Component } from 'react';
import axios from 'axios';
import { Route } from 'react-router-dom'
import { Link } from "react-router-dom";

class Auth extends Component {
  state = {
  };

  componentDidMount() {
    this.getList();
  }
  getList = async () => {
    try {
      await axios.get('/api/auth')
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

  register = async () => {
    try {
      await axios.post('/api/auth')
        .then((res) => {
          console.log(res.data);
        })
    }
    catch (error) {
      console.log(error);
      alert('회원가입 실패!');
      this.props.history.push("/")
    }
  }

  render() {
    return (
      <main class="sign-page">
        <div class="container">
            <div class="row travel-group">
                <div class="col-12">
                    <h1>회원가입</h1>
                </div>
                <div class="col-12">
                    <div class="login-group">
                        <label for="userid">5~10자, 숫자 + 영문 대소문자 조합</label><br/>
                        <input type="text" id="userid" placeholder="New ID ( 5 ~ 10 자)" class="sign-input" min="5"
                               max="10"></input><br/>
                        <label for="userpw">8~16자, 숫자 + 영문 대소문자 + 특수문자 조합</label><br/>
                        <input type="password" id="userpw" placeholder="New Password ( 8 ~ 16자 )" class="sign-input"
                               min="8"
                               max="16"></input><br/>
                        <label for="confirmpw">비밀번호를 한번 더 입력해주세요.</label><br/>
                        <input type="password" id="confirmpw" placeholder="CONFIRM Password" class="sign-input"></input><br/>
                    </div>
                </div>
                <button onclick={this.register} class="box-btn">회원가입</button>
            </div>
        </div>
    </main>
    )
  }
}

export default Auth;