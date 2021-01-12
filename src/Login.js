import React from 'react'


import loginLogo from "./zuckbook.png"

import loginLogoFont from "./zuckbook_word.png"

import googleLogo from "./google-logo.png"

import Avatar from "@material-ui/core/Avatar";

import "./Login.css"

import {auth, provider} from "./firebase";



function Login() {

const signIn = () => {

    auth.signInWithPopup(provider).then(result => {
        console.log(result).catch(error => alert(error.message))
    })
}
    


    return (
        <div className="login">

            <div className="login__logo">

                <img src={loginLogo} alt=""/>


                <img className="login__font"style={{height: "300px"}} src={loginLogoFont} alt=""/>


            </div>


    <div className="button__container">   


        <Avatar className="loginPage__avatar" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOxJnEqfkjuGiohBOOJGhL1p_BeF08KN5gew&usqp=CAU"}/>


            <button onClick={signIn}>
                <img src={googleLogo} alt=""/>

                <h4>Login with Google</h4>
            </button>

            <button style={{bottom: "45px"}}  >
               

                <h4>Demo Login</h4>
            </button>

            </div>
           
            
        </div>
    )
}

export default Login
