// RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/useAuth';

const RegisterForm = () => {
  const {authDispatch, token} = useAuth();
  const [email, setEmail] = useState('');
  const [password1, setPassword] = useState('');
  const [password2, setSecondPassword] = useState('');

  const handleRegister = async () => {
    try {
      const response = await axios.post(`http://${process.env.REACT_APP_BACKEND}/accounts/register/`, {
        email,
        password1,
        password2,
      });

      const token = response.data.token;
      authDispatch({type: 'setToken', data: token})

    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2>Register: {token}</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <label>Password:</label>
        <input
          type="password"
          value={password1}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <label>Repeat Password:</label>
        <input
          type="password"
          value={password2}
          onChange={(e) => setSecondPassword(e.target.value)}
          style={styles.input}
        />

        <button type="button" onClick={handleRegister} style={styles.button}>
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: 'grid',
    placeItems: 'center',

},
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '300px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    marginBottom: '20px',
    background: '#f4f4f4',
    marginTop: "200px",
  },
  input: {
    marginBottom: '10px',
    padding: '8px',
  },
  button: {
    background: '#4CAF50',
    color: 'white',
    padding: '10px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default RegisterForm;
