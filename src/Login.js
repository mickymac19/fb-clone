import React from 'react';
import './Login.css';
import { Button } from "@material-ui/core";
import { auth, provider } from "./firebase";

function Login() {
    const signIn = () => {
        auth
          .signInWithPopup(provider)
          .then((result) => {
              console.log(result);
          })
          .catch((error) => alert(error.message)); 
    };
    return (
        <div className="login">
            <div className="login__logo">
                <img
                  src="./fblogo.png"
                  alt=""
                  />
                  <img
                    src="https://www.logo.wine/a/logo/Facebook/Facebook-Logo.wine.svg"
                    alt=""
                    /> 
            </div>
            <Button type="submit" onClick={signIn}
            >
             Sign In
            </Button>
        </div>
    )
}

export default Login;
