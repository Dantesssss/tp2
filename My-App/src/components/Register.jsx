import React, { useState } from 'react';
import authService from '../services/authService';
import '../style/LoginStyle.css';

const Register = ({ setIsLoggedIn }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Validar que los campos no estén vacíos antes de hacer la solicitud de registro
    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
      console.error('Todos los campos son requeridos.');
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/i;
    if (!emailPattern.test(email)) {
      console.error('El formato del correo electrónico es inválido.');
      return;
    }

    // Validar longitud mínima de la contraseña
    if (password.length < 8) {
      console.error('La contraseña debe tener al menos 8 caracteres.');
      return;
    }

    authService.register(name, email, password)
      .then(response => {
        console.log('User registered:', response.data);
        setIsLoggedIn(true); // Marcar al usuario como autenticado después del registro exitoso
      })
      .catch(error => {
        console.error('There was an error registering the user!', error);
      });
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
        pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
