
import React, { useRef, useState } from 'react';
import'./ForgetPassword.css';
function ForgetPassword() {
  const emailRef = useRef();
  const [message, setMessage] = useState('');

  const handleResetPassword = () => {
    const email = emailRef.current.value;

    setMessage(`Password reset instructions sent to ${email}`);
  };

  return (
    <div>
      <h1>&nbsp;Pharmacy Management</h1>
      <br />
      <br />
      <div className="container">
        <br />
        <h2 id="head">&nbsp;&nbsp;Forget Password</h2>
        <br />
        <label htmlFor="email">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
        <input type="text" id="email" ref={emailRef} />
        <br />
        <br />
        <br />
        <button type="button" onClick={handleResetPassword}>
          Reset Password
        </button>
        <p>{message}</p>
      </div>
    </div>
  );
}

export default ForgetPassword;
