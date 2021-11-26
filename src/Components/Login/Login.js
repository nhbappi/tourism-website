import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
// import { createUserWithEmailAndPassword, getAuth } from '@firebase/auth';

const Login = () => {
    const {signInUsingGoogle, handleUserLogin} = useAuth();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location.state?.from || '/home';
    console.log('come from', location.state?.from);
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleLogin = () =>{
         signInUsingGoogle()
         .then(result =>{
              history.push(redirect_url)
         })  
    };

    const handleEmail = (e) =>{
        setEmail(e.target.value);
    };
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    };
    const handleLogin = () =>{
        handleUserLogin(email, password);
        history.push("/");
    };


    return (
        <div className="log-form">
            <div>
                <h1 className="mt-4">Please Login</h1>
                <form>
                    <input onChange={handleEmail} type="email" name="" id="" placeholder="Your Email"/>
                    <br/>
                    <input onChange={handlePassword} type="password" name="" id=""/>
                    <br/>
                   <button onClick={handleLogin} className="btn btn-success ms-1">Login</button>
                </form>
                <p>New to Vetrexx? <Link to="/register">Create Account</Link></p>
                <div>-----or--------</div>
                <button
             className="btn-regular bg-warning rounded mb-5"
             onClick={handleGoogleLogin}
             >Google Sign In</button>
            </div>
            
          
        </div>
    );
};

export default Login;