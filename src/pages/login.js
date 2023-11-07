import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { Auth } from "../firebase/firebase";

const Login = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);


  const [showPassword, setShowPassword] = useState(false);

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setFormValues({ ...formValues, [name]: value });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    setFormErrors({}); 

    if (!formValues.email) {
      setFormErrors({ email: "Email is required" });
      return;
    }

    if (!validateEmail(formValues.email)) {
      setFormErrors({ email: "Email is invalid" });
      return;
    }

    if (!formValues.password) {
      setFormErrors({ password: "Password is required" });
      return;
    }

    try {
      await signInWithEmailAndPassword(Auth, formValues.email, formValues.password);
      navigate("/");
    } catch (error) {
      setFormErrors({ firebase: error.message });
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSignUpClick = () => {
    navigate("/Sign-up");
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(Auth, provider);
      const user = result.user;

      
      setLoggedIn(true);
      setFormErrors({});
    } catch (error) {
      setFormErrors({ firebase: error.message });
    }
  };

  
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
  };

  const formStyle = {
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.2)",
    backgroundColor: "#fff",
  };

  const inputStyle = {
    width: "100%",
    marginBottom: "10px",
    padding: "8px",
    fontSize: "16px",
  };

  const buttonStyle = {
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  };

  const errorStyle = {
    color: "red",
    marginBottom: "10px",
  };

  return (
    <div style={containerStyle}>
      <h1>Sign In</h1>
      <form style={formStyle}>
        <div>
          <input
            style={inputStyle}
            id="email"
            type="email"
            name="email"
            placeholder="Email Address"
            value={formValues.email}
            onChange={handleInput}
          />
          <p style={errorStyle}>{formErrors.email}</p>
        </div>
        <div>
          <input
            style={inputStyle}
            id="password"
            type={showPassword ? "text" : "password"} 
            name="password"
            placeholder="Password"
            value={formValues.password}
            onChange={handleInput}
          />
          <p style={errorStyle}>{formErrors.password}</p>
        </div>
        <label>
          <input
            type="checkbox"
            onChange={togglePasswordVisibility}
          />
          Show Password
        </label>
        <button style={buttonStyle} onClick={handleSignIn}>
          Sign In
        </button>
        <button style={buttonStyle} onClick={handleSignUpClick}>
          Sign Up
        </button>
        <button style={buttonStyle} onClick={handleGoogleSignIn}>
          Sign with Google
        </button>
        <p style={errorStyle}>{formErrors.firebase}</p>
      </form>
    </div>
  );
};

export default Login;
