// RegisterForm.js
import React, { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/useAuth';
import { redirect, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const {authDispatch, token} = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const handleLogin = async () => {
    try {
      const response = await axios.post(`http://${process.env.REACT_APP_BACKEND}/accounts/login/`, {
        email,
        password
      });

      const token = response.data.token;
      authDispatch({type: 'setToken', data: token})
      navigate('/')
    } catch (error) {
        console.error('Login failed', error);
    }
    return redirect('/register');
  };

  return (
    <div style={styles.container}>
      <form className='flex flex-col w-5/6 md:w-1/3 bg-stone-100 p-14 rounded-xl space-y-2'>
        <h2 className='font-serif text-2xl'>Login</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          className='transition duration-500 ease-in-out border-2 focus:bg-amber-200'
        />

        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          className='transition duration-500 ease-in-out border-2 focus:bg-amber-200'
        />

        <button type="button" onClick={handleLogin} className="transition ease-in-out rounded outline outline-1 bg-amber-200 font-serif p-4 mx-8 text-xl hover:bg-amber-500">
          Login
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

export default LoginForm;
