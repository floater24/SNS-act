import React, { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../apiCalls";
//AuthContextはユーザー状態が入ってる(user, isFetching, error, dispatch)
import { AuthContext } from "../../state/AuthContext";
import { Link } from "react-router-dom";


export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(email.current.value);
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

  console.log(user); //ユーザーがログインしてる状態ですね！！！
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">act</h3>
          <span className="loginDesc">あなたはactする。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleClick(e)}>
            <p className="loginMsg">ログインはこちら</p>
            <input
              type="email"
              className="loginInput"
              placeholder="Email"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              required
              minLength="6"
              placeholder="password"
              ref={password}
            />
            <button className="loginButton">ログイン</button>
            <span className="loginForgot">パスワードを忘れた方へ</span>
            <Link to="/register">
              <button className="loginRegisterButton">アカウント作成はこちら</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
