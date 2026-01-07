import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      const res = await fetch(
        `http://localhost:3000/user?username=${username}`
      );

      if (!res.ok) {
        throw new Error("Failed to fetch");
      }

      const data = await res.json();

      
      if (data.length === 0) {
        setError("User not found");
        return;
      }

      
      if (data[0].password !== password) {
        setError("Invalid password");
        return;
      }

      alert("Login successful");
      navigate("/");

    } catch (err) {
      setError("Something went wrong");
      console.error(err.message);
    }
  };

  return (
    <div className="login-form">
      <div className="login-box">
        <form onSubmit={handleSubmit}>
          <h2>Login</h2>

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <div className="input-box">
            <label>Username</label>
            <input
              type="text"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <label>Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">Login</button>

          <p>
            Don't have an account? <Link to="/signup">Register</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
