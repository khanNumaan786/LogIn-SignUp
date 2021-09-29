import React, { useState } from "react";
// import {browserHistory} from "react-router";   
import "./Style.css"
function Login() {
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    function signUp(e) {
        e.preventDefault();
        alert(password)
        alert(email)
    }


    return (
        <div>
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
                <button type="submit" class="btn btn-primary" onClick={signUp}>Log In</button>
            </form>
        </div>
    )
}

export default Login;