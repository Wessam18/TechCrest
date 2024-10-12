import React, { useRef } from 'react';
import '../styles/login.css'; // assuming your styles are in the same folder
import { Link, useNavigate } from 'react-router-dom';

const SignupPage = () => {
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    const enteredName = name.current.value;
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;
    const enteredConfirmPassword = confirmPassword.current.value;
  
    if (enteredName && enteredEmail && enteredPassword) {
      if (enteredPassword === enteredConfirmPassword) {
        // Get existing users from localStorage, or set to an empty array if none
        let users = JSON.parse(localStorage.getItem('users')) || [];
  
        // Check if the email already exists
        const userExists = users.find(user => user.email === enteredEmail);
        if (userExists) {
          alert("User with this email already exists.");
          return;
        }
  
        // Add new user to users array
        const newUser = { name: enteredName, email: enteredEmail, password: enteredPassword };
        users.push(newUser);
  
        // Save the updated array of users to localStorage
        localStorage.setItem('users', JSON.stringify(users));
        
        alert('Account created successfully! Please log in to continue.');
        
        // Redirect to login page (do NOT auto-login)
        navigate('/login');
      } else {
        alert("Passwords don't match. Please try again.");
      }
    } else {
      alert('Please fill in all fields.');
    }
  };
  
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-image'>
      <div className='form-container p-5 rounded bg-white'>
        <form onSubmit={handleSignUp}>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-5'>
            <label htmlFor='text'>User Name</label>
            <input type='text' placeholder='Enter Your Name' className='form-control' ref={name} />
          </div>
          <div className='mb-5'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' ref={email} />
          </div>
          <div className='mb-5'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' ref={password} />
          </div>
          <div className='mb-5'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' ref={confirmPassword} />
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn-signin'>Register</button>
          </div>
          <div className='custom-check'>
            <p className='text-right' id='signup'>Already have an account? <Link to="/login" className='ms-2'><b>Login Here</b></Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
