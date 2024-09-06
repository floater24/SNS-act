import React, { useRef } from "react";
import axios from "axios";
import "./Register.css";
import { Link, useNavigate } from "react-router-dom";
export default function Register() {
  const email = useRef();
  const password = useRef();
  const username = useRef();
  const passwordConfirmation = useRef();

  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();

    // パスワードと確認用パスワードの照合
    if (password.current.value !== passwordConfirmation.current.value) {
      passwordConfirmation.current.setCustomValidity("パスワード違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };
        //registerAPIを叩く
        await axios.post("/", user);
        navigate("/login");
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">act</h3>
          <span className="loginDesc">あなたはactする。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleClick(e)}>
            <p className="loginMsg">新規登録はこちら</p>
            <input
              type="text"
              className="loginInput"
              placeholder="ユーザー名"
              required
              ref={username}
            />
            <input
              type="email"
              className="loginInput"
              placeholder="Eメール"
              ref={email}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="パスワード"
              required
              maxLength={6}
              ref={password}
            />
            <input
              type="password"
              className="loginInput"
              placeholder="確認用パスワード"
              required
              maxLength={6}
              ref={passwordConfirmation}
            />
            <button className="loginButton" type="submit">
              サインアップ
            </button>
            <Link to="/login">
              <button className="loginRegisterButton">ログインはこちら</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
