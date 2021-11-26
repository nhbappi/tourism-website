import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from '@firebase/auth';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
const Register = () => {
    const auth = getAuth();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || "/";

    const handleGoogleLogin = () => {
        signInUsingGoogle().then((result) => {
            history.push(redirect_uri);
        });
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
      const handleNameChange = (e) => {
          setName(e.target.value);
      };

     const handlePasswordChange = (e) => {
         if (e.target.value.length < 6) {
             console.error("password must need to be at least 6 characters");
             return;
         } else {
             setPassword(e.target.value);
         }
     };

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user);
                verifyEmail();
                setUserName();
                history.push("/");
            })
            .catch((error) => console.log(error.message));
    };


     const verifyEmail = () => {
         sendEmailVerification(auth.currentUser).then(() => {
             
         });
    };
    
    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name }).then(
            (result) => {}
        );
    };



    return (
        <div className="login-form">
            <div>
                <h2>Register: Create Account</h2>
                <form onSubmit={handleRegister}>
                    <input
                        onBlur={handleNameChange}
                        type="name"
                        name="name"
                        id=""
                        placeholder="Your Name"
                        required
                    />
                    <br />
                    <input
                        onChange={handleEmailChange}
                        type="email"
                        name="email"
                        id=""
                        placeholder="Your Email"
                        required
                    />
                    <br />
                    <input
                        onChange={handlePasswordChange}
                        type="password"
                        name="password"
                        id=""
                        placeholder="Your Password"
                        required
                    />
                    <br />
                    <input
                        onChange={handlePasswordChange}
                        type="password"
                        name="password"
                        id=""
                        placeholder="Re-enter Password"
                        required
                    />
                    <br />
                    <input
                        
                        className="mt-3 w-5 btn btn-success m-auto"
                        type="submit"
                        value="Register"
                    />
                </form>
                <p>
                    Already have an account? <Link to="/login">Login</Link>
                </p>
                <div>----------or-------------</div>
                <button onClick={handleGoogleLogin} className="btn-regular">
                    Google Sign In
                </button>
            </div>
        </div>
    );
};

export default Register;