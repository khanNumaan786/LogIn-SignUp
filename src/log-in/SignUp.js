import React, { useState } from "react";
import { Link } from "react-router-dom";


function SignUp() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    function Login(e) {
        e.preventDefault();
        document.write("Your Data is save","<br/>"," Your name is","<br/>", name,
        "<br/>",
            "your email is","<br/>", email,
            "<br/>",
            "Your password is","<br/>", password)
    }   
    return (
        <div className="body">
            <form>
                <div class="form-group">
                    <label for="name">User Name</label>
                    <input type="text" class="form-control" id="name" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div class="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" class="btn btn-primary" onClick={Login}> Signup</button>
            
                <Link to="./login" class="btn btn-primary"> Cancel </Link>
               
            </form>
        </div>
    )
}

export default SignUp;