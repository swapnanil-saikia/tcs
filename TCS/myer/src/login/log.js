import { Router, Switch, Route, Link, useNavigate } from "react-router-dom";
import React from "react";
import './log.scss'
import Header from "../component/header";
export default function Login() {
    let navigate = useNavigate()
    const login = () => {
        navigate('/landing')
    }
    return (
        <>
            <Header />
            <div className="form">
                <form className="log-form">
                    <input type="text" placeholder="emailid"></input>
                    <input type='password' placeholder="password"></input>
                    <button className="btn" onClick={login}>Log in</button>
                </form>
            </div>
        </>
    );
}

// export  default login;
