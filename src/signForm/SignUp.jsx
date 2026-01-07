import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch('http://localhost:3000/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();
      console.log(username,email,password)

      if (res.ok) {
        alert('Account created successfully!');
        navigate('/'); 
      } else {
        setError(data.message || 'Signup failed');
      }
    } catch (err) {
      setError('Network error: ' + err.message);
    }
  };

  return (
    <div className="signup">
      <div className="signup-forms">
        <div className="signup-title">
          <h2>Create an Account</h2>
          <h3>
            Already have an account? <Link to="/signin" className="login">Log in</Link>
          </h3>
        </div>

        <form className="signup-form" onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}

          <label className="email">
            <h3>Username</h3>
            <input
              type="text"
              placeholder="Enter username"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="email">
            <h3>Email address</h3>
            <input
              type="email"
              placeholder="Enter email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label className="password">
            <h3>Password</h3>
            <input
              type="password"
              placeholder="Enter password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="link">
            <button type="submit">Create an account</button>
          </div>

          <div className="links">
            <h3>
              or continue with{' '}
              <a href="https://accounts.google.com" className="google" target="_blank" rel="noreferrer">Google</a> or{' '}
              <a href="https://www.facebook.com" className="facebook" target="_blank" rel="noreferrer">Facebook</a>
            </h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
