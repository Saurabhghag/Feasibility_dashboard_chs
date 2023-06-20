/**
 * Company Name - Canberra Health Services
 * Project Name: Feasibility Modelling for Clinical Trials
 * Author: Saurabh Vilas Ghag
 * Version: 1.0.0
 * Date: 23 May 2023
 */
import React, { useState} from 'react';
import { faEnvelope, faLock, faUser, faVenusMars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

/**
 * The Signup component.
 *
 * This component represents the Signup form and functionality.
 */
function Signup() {
  const [firstName, setFirstName] = useState('');// Stores the first name
  const [lastName, setLastName] = useState('');// Stores the last name
  const [email, setEmail] = useState('');// Stores the email address
  const [password, setPassword] = useState('');// Stores the password
  const [gender, setGender] = useState('');// Stores the selected gender
  const [formErrors, setFormErrors] = useState({});// Stores validation errors for the form fields
  const navigate = useNavigate();// Navigation function

  
// Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    let isValid = true;
    let errors = {};
    
   // Validation checks for each field
    if (!firstName.trim()) {
      isValid = false;
      errors.firstName = "First name is required";
    }
  
    if (!lastName.trim()) {
      isValid = false;
      errors.lastName = "Last name is required";
    }
  
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
  
    if (!gender) {
        isValid = false;
        errors.gender = "Gender is required";
      }

    if (!isValid) {
      setFormErrors(errors);
      return;
    }
    if(firstName === "" && lastName === "" && email === "" && password === "" && gender === "")
    {
     // Send a POST request to the server to create a new account
      axios.post('http://localhost:8083/signup', { firstName, lastName, email, password, gender })

      .then(res => {
        navigate('/'); // Navigate to the login page on successful signup
      })
      .catch(err => console.log(err));
    }

    setFormErrors({});
    console.log(firstName, lastName, email, password, gender);

    
    
  };
  
  

  return (
    <div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
      <div className='bg-white p-3 rounded w-25'>
        <h1>Sign-Up</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='firstName'>
              <FontAwesomeIcon icon={faUser} className='me-2' />
              First Name
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter First Name'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            {formErrors.firstName && (
              <span className='text-danger'>{formErrors.firstName}</span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='lastName'>
              <FontAwesomeIcon icon={faUser} className='me-2' />
              Last Name
            </label>
            <input
              type='text'
              className='form-control'
              placeholder='Enter Last Name'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            {formErrors.lastName && (
              <span className='text-danger'>{formErrors.lastName}</span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='email'>
              <FontAwesomeIcon icon={faEnvelope} className='me-2' />
              Email
            </label>
            <input
              type='email'
              className='form-control'
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {formErrors.email && (
              <span className='text-danger'>{formErrors.email}</span>
            )}
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>
              <FontAwesomeIcon icon={faLock} className='me-2' />
              Password
            </label>
            <input
              type='password'
              className='form-control'
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {formErrors.password && (
              <span className='text-danger'>{formErrors.password}</span>
            )}
          </div>
           <div className='mb-3'>
            <label htmlFor='gender'>
              <FontAwesomeIcon icon={faVenusMars} className='me-2' />
              Gender
            </label>
            <select
              className='form-select'
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value=''>Select Gender</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
              <option value='other'>Other</option>
            </select>
            {formErrors.gender && (
              <span className='text-danger'>{formErrors.gender}</span>
            )}
          </div>
          <div className='d-grid gap-2'>
            <button type='submit' className='btn btn-success'>Sign up</button>
            <Link
              to='/'
              className='btn btn-outline-secondary text-decoration-none'
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;

