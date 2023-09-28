import React, { useState } from 'react';
import { api } from './api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async () => {
    const response = await api.post('', {
      email,
      password,
    });

    // Si la respuesta es exitosa, navega a la página de inicio.
    if (response.status === 200) {
      // Navega a la página de inicio.
    }
  };

  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Iniciar sesión</button>
    </div>
  );
};

export default Login;
