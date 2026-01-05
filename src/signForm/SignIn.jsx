import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/");
    }
  return (
    <div className="login-form">
    <div className="login-box">
        <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-box">
                <label>Email</label>
                <input type="email" required/>
                
            </div>
            <div className="input-box">
                 <label>Password</label> 
                <input type="password" required />
                          
            </div>
            <div className="remember-forgot">
                <label><input type="checkbox"/>&nbsp;Remember me</label>
                <a href="#">Forgot Password</a>
            </div>
            <button type="submit">Login</button>
            <div className="register">
                <p>Don't have an account? <Link to="/signup">Register</Link></p>
            </div>
        </form>
    </div>
    </div>
  )
}

export default SignIn