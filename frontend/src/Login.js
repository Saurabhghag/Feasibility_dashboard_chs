
/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */
import React, { useState } from 'react'
import { faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * The Login component.
 *
 * This component represents the login form and functionality.
 * It allows users to enter their email and password to log in.
 */

function Login() {
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [errors, setErrors] = useState({});
const navigate = useNavigate();
/**
   * Handle form submission.
   *
   * This function is triggered when the login form is submitted.
   * It validates the entered email and password, and makes a POST request to the login API.
   * If the login is successful, it navigates to the homepage. Otherwise, it displays an error message.
   */
const handleSubmit = (e) => {
e.preventDefault();
let isValid = true;
    let errors = {};
    if (!email.trim()) {
        isValid = false;
        errors.email = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(email)) {
        isValid = false;
        errors.email = "Email address is invalid";
      }
if (!password.trim()) {
      isValid = false;
      errors.password = "Password is required";
    } else if (password.length < 6) {
      isValid = false;
      errors.password = "Password must be at least 6 characters";
    }
    if (!isValid) {
        setErrors(errors);
        return;
      }
      setErrors({});
      console.log(email, password);
  
      {
      
        axios.post('http://localhost:8082/login', {  email, password})
  
        .then(res => {
          if(res.data === "Successful"){
          navigate('/homepage');
          }
          else{
           alert("No record existed");
          }
        })
        .catch(err => console.log(err));
      }

      
      
};

return (
<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
<div className='bg-white p-3 rounded w-25'>
    <h1>Login</h1>
<form onSubmit={handleSubmit}>
<div className='mb-3'>
<label htmlFor="email"> <FontAwesomeIcon icon={faEnvelope} className='me-2' />Email</label>
<input type="email" className='form-control' placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
{errors.email && <span className="text-danger">{errors.email}</span>}
</div>
<div className='mb-3'>
<label htmlFor="password"><FontAwesomeIcon icon={faLock} className='me-2' />Password</label >
<input type="password" className='form-control' placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)}/>
{errors.password && <span className="text-danger">{errors.password}</span>}
</div>
<div className='d-grid gap-2'>
<button className='btn btn-success'>Login</button>
<Link to="/signup" className='btn btn-outline-secondary text-decoration-none'>Register</Link>
</div>
<div className='text-center mt-3'>
</div>
</form>
</div>
</div>
)
}

export default Login
