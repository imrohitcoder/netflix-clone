import React, { useState } from "react";
import { useEffect } from "react";
import { auth } from "../firebase";
import "./loginPage.css";
import SignInPage from "./SignInPage";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/userSlice";

const LoginPage = () => {
  const [signIn, setSignIn] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        //logout
        dispatch(logout());
      }
    });
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="loginPage">
      <div className="loginPage_background">
        <img
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
          className="loginPage_logo"
        />
        <button className="signIn_btn" onClick={() => setSignIn(true)}>
          sign in
        </button>
        <div className="loginPage_gredient"></div>
      </div>
      <div className="loginPage_body">
        {signIn ? (
          <SignInPage />
        ) : (
          <>
            <h1>Unlimited films,TV programmes and more</h1>
            <h2>Watch anywhere,Cancel at anytime.</h2>
            <h3>
              Ready to watch?Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginPage_input">
              <input type="email" placeholder="Email Adress" />
              <button
                className="loginPage_getStarted"
                onClick={() => setSignIn(true)}
              >
                Get started
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
