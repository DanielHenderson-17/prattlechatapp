import React from 'react';
import { GoogleOutlined, FacebookOutlined } from '@ant-design/icons';
import "firebase/app";

import firebase from "firebase/app";
import { auth } from '../firebase';

const Login = () => {
    return (
        <div id="login-page">
            <div id="login-card">
                <h4 style={{margin: "0"}}>Welcome to</h4>
                <img src="https://images.cooltext.com/5551759.png" width="55%"  alt="Prattle " />

                <div
                    className="login-button google"
                    style={{width:"199px", marginTop: "30px"}}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                >
                    <GoogleOutlined /> Sign in with Google
                </div>

                <br /> <br />

                <div
                    className="login-button facebook"
                    style={{width:"199px"}}
                    onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())}
                >
                    <FacebookOutlined /> Sign in with Facebook
                </div>

            </div>
        </div>
    );
}

export default Login;