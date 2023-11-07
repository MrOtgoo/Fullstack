import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Auth , userCollaction} from "../firebase/firebase"; 
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc } from "firebase/firestore";

const SignUp = () => {
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    checkbox: false,
  });

  const [formErrors, setFormErrors] = useState({});

  const [showPassword, setShowPassword] = useState(false);


  const validateForm = yup.object().shape({
    name: yup.string().min(4, "Must be more than 4 characters").required("Name is required"),
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().min(8, "Must be more than 8 characters").required("Password is required"),
    confirmPassword: yup.string().oneOf([yup.ref("password"), ], "Passwords must match").required("Confirm password is required"),
    checkbox: yup.boolean().oneOf([true], "You must agree to the terms and conditions"),
    passwordcheckbox: yup.boolean().oneOf([true])
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;

    yup
      .reach(validateForm, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((error) => {
        setFormErrors({ ...formErrors, [name]: error.message });
      });

    setFormValues({ ...formValues, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = async (e) => {
    e.preventDefault(); 

    try {
        await validateForm.validate(formValues, { abortEarly: false });
  
        if (!formValues.checkbox) {
          throw new Error("You must agree to terms and conditions");
        }
  
        if (formValues.password !== formValues.confirmPassword) {
          throw new Error("Passwords must match");
        }
  
        const userCredential = await createUserWithEmailAndPassword(
          Auth,
          formValues.email,
          formValues.password
        );
  
        const userId = userCredential.user.uid;
        console.log("User signed up:", userId);
  
        
        await addDoc(userCollaction, {
            userId: userId,
            email: formValues.email,
            name: formValues.name,
          })
  

        navigate("/login");
      } catch (error) {
        console.error("Sign-up error:", error.message);
        setFormErrors({ ...formErrors, general: error.message });
      }
    };
  

  return (
    <div className="container">
      <h1 className="header">Get Started Now</h1>
      <form className="form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            name="name"
            value={formValues.name}
            onChange={handleInput}
          />
          <p className="error">{formErrors.name}</p>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email Address</label>
          <input
            id="email"
            type="email"
            name="email"
            value={formValues.email}
            onChange={handleInput}
          />
          <p className="error">{formErrors.email}</p>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            value={formValues.password}
            onChange={handleInput}
          />
          <p className="error">{formErrors.password}</p>
        </div>
        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            value={formValues.confirmPassword}
            onChange={handleInput}
          />
          <p className="error">{formErrors.confirmPassword}</p>
        </div>
        <div className="form-group">
          <input
            id="checkbox"
            type="checkbox"
            name="checkbox"
            checked={formValues.checkbox}
            onChange={handleInput}
          />
          <label htmlFor="checkbox">Agree to terms and conditions</label>
          <p className="error">{formErrors.checkbox}</p>
        </div>
        <button className="sign-button" onClick={handleSignUp}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;
