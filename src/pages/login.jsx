import React from 'react';
import './login.css'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
// import { useState, useEffect } from 'react';
// import {auth} from '../config/firebase'
// import {signInWithEmailAndPassword} from 'firebase/auth';

const LoginPage = () => {
    
    const navigate = useNavigate();
    const [email, setEmail] = React.useState ('');
    const [Password, setPassword] = React.useState ('');

    const btn = {
        marginTop:'3px',
         background:"orange",
         height:"30px",
         width:"100px",
     }

     const login_btn = () =>{
            navigate('/Home')
     }

     const signup = () =>{
        navigate('/signup')
     }
 
    //  let history= useNavigate ();
 
    //  const login =(() => {
    //     signInWithEmailAndPassword(auth,email,Password).then (() => {
    //          history("/home");
    //      }).catch ((error) => {
    //          console.log(error);
    //      })
 
    //  });
    return(
        <div className='main-container'>
           <div className="login-box"> 
                <form className='input-box'>
                    <h1>LOGIN</h1>
                        
                        <input text="email" placeholder="enter email" onChange={(e) => setEmail(e.target.value)}/>
                        <input text="password" placeholder="enter your password" onChange={(e) => setPassword(e.target.value)}/>
                        <p>Don't Have Account <span onClick={signup}><Link to="/signup" >Create Account</Link></span></p>
                        
                        
                        <p>Forget Password <span><Link to="/forgetpassword">Reset Password</Link> </span></p>
    
                        <button className='login-btn' style={btn} onClick={login_btn}>LogIn</button>

                </form>
            </div>
        </div>
  );
}

export default LoginPage;