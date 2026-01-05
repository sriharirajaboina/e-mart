import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        navigate("/")
    }
  return (
    <>
        <div className="signup">
            <div className="signup-forms">
                <div className="signup-title">
                    <h2>Create an Account</h2>
                    <h3>Already have an account?<Link to="/signin" className="login">Log in</Link></h3>
                </div>
                <div className="userUse">
                    <label>
                        <input type="radio" className="round" required/>
                        For Personal
                    </label>
                    <label>
                        <input type="radio" className="round" />
                        For Bussiness
                    </label>
                </div>
                <form className="signup-form" onSubmit={handleSubmit}>
                    <label className="email">
                        <h3>Email adress</h3>
                        <input type="email" placeholder="enter te email" required/>
                    </label>
                    <label className="password">
                        <h3>Password</h3>
                        <input type="password" placeholder='enter password' required/>
                    </label>
                    <label className="country">
                        <h3>Country of residence</h3>
                        <select required>
                            <option value="">Select country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="UK">UK</option>
                        </select>
                    </label>
                    <div className="link">
                        <button type="submit">Create an acoount</button>
                    </div>
                    <div className="links">
                        <h3>or,continue with 
                            <a href="https://www.google.com" target="_blank" className="google"> Google</a> or <a href="https://www.facebook.com/" className="facebook">Facebook</a>
                        </h3>
                    </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default SignUp