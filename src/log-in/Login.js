import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "./Style.css"
function Login(prop) {
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function signUp(e) {
        e.preventDefault();
        alert(password)
        alert(email)
    }


    return (
        <div className="body">
            <form>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <Link type="submit" class="btn btn-primary" onClick={signUp}>Log In</Link>
            </form>
        </div>
    )
}

export default Login;