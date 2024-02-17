import React, { useRef, useEffect } from "react";
import axios from 'axios';  // Import Axios
import './Signup.css';

function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    nameRef.current.value = storedData.name || "";
    emailRef.current.value = storedData.email || "";
    usernameRef.current.value = storedData.username || "";
    passwordRef.current.value = storedData.password || "";
  }, []);

  const handleSignup = async (formData) => {
    try {
      // Replace the URL with your actual signup endpoint
      const response = await axios.post('https://your-auth-api.com/signup', formData);

      if (response.status === 200) {
        // Signup successful, you may want to handle the response accordingly
        console.log("Signup successful!");
        localStorage.setItem("formData", JSON.stringify(formData));
      } else {
        // Signup failed, handle the error
        console.error("Signup failed");
      }
    } catch (error) {
      console.error("Error during signup:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !nameRef.current.value ||
      !emailRef.current.value ||
      !usernameRef.current.value ||
      !passwordRef.current.value
    ) {
      alert("Please fill in all the details");
      return;
    }

    const formData = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      username: usernameRef.current.value,
      password: passwordRef.current.value,
    };

    handleSignup(formData);

    console.log("Form submitted!");
  };

  return (
    <div>
      <h1>&nbsp;Pharmacy Management</h1>
      
      <div className="container">
        <form onSubmit={handleSubmit}>
          <br></br>
          <h1 id="head">&nbsp;&nbsp;Sign up</h1>
          <br></br>
          <label htmlFor="na">Name:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; </label>
          <input type="text" id="na" ref={nameRef} />
          <br></br>
          <br></br>
          <label htmlFor="email">Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <input type="text" id="email" ref={emailRef} />
          <br></br>
          <br></br>
          <label htmlFor="uname">Username: &nbsp;</label>
          <input type="text" id="uname" ref={usernameRef} />
          <br></br>
          <br></br>
          <label htmlFor="pwd">Password:&nbsp;</label>
          <input type="password" id="pwd" ref={passwordRef} />
          <br></br>
          <br></br>
          <br></br>
          <input type="submit" value="SIGNUP" className="but" />
        </form>
      </div>
    </div>
  );
}

export default Signup;
