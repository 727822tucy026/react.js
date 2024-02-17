import React, { useRef, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';  // Import Axios
import './Login.css';

function Login() {
  const usernameRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('formData')) || {};
    usernameRef.current.value = storedData.username || '';
    passwordRef.current.value = storedData.password || '';
  }, []);

  const handleAuthentication = async (formData) => {
    try {
      // Replace the URL with your actual login endpoint
      const response = await axios.post('https://your-auth-api.com/login', formData);

      if (response.status === 200) {
        // Login successful
        setAuthenticated(true);
        navigate('/dashboard'); // Redirect to the dashboard on successful authentication
      } else {
        // Login failed, handle the error
        setAuthenticated(false);
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error('Error during authentication:', error.response);
      setAuthenticated(false);
      alert('An error occurred during authentication');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!usernameRef.current.value || !passwordRef.current.value) {
      alert('Please fill in all the details');
      return;
    }

    const formData = {
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    handleAuthentication(formData);

    console.log('Form submitted!');
  };

  const handleForgotPassword = () => {
    alert('Forgot Password clicked!');
  };

  return (
    <div>
      <h1>&nbsp;Pharmacy Management</h1>
      <br></br>
      <br></br>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <br></br>
          <h1 id="head">&nbsp;&nbsp;Log in</h1>
          <br></br>
          <label htmlFor="uname">Username: &nbsp;</label>
          <input type="text" id="uname" ref={usernameRef}></input>
          <br></br>
          <br></br>
          <label htmlFor="pwd">Password:&nbsp;&nbsp;&nbsp;</label>
          <input type="password" id="pwd" ref={passwordRef}></input>
          <br></br>
          <br></br>
          <br></br>
          <input type="submit" value="LOGIN" className="but"></input>
          <br />
          <Link to="/ForgetPassword">Forgot Password?</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
