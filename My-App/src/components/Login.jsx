import React, { useState } from 'react';
import authService from '../services/authService';
import '../style/LoginStyle.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    authService.login(email, password)
      .then(response => {
        console.log('User logged in:', response.data);
        setIsLoggedIn(true); // Marcar al usuario como autenticado después del inicio de sesión exitoso
      })
      .catch(error => {
        console.error('Error logging in:', error);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
