import React from "react";
import { useRef } from "react";
import { auth } from "../firebase";
import "./signInPage.css";

const SignInPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signInPage">
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} type="email" placeholder="Email" />
        <input ref={passwordRef} type="password" placeholder="password" />
        <button onClick={signIn}>Sign In</button>
        <h5>
          <span className="signInPage_text">New to Netflix?</span>
          <span className="signInPage_link" onClick={register}>
            Sign Up Now
          </span>
        </h5>
      </form>
    </div>
  );
};

export default SignInPage;
