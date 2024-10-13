import React, { useRef, useState } from 'react';
import '../styles/login.css'; // Assuming your styles are in the same folder
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth from your context

const SignupPage = () => {
  const { login } = useAuth(); // Use login from AuthContext
  const userNameRef = useRef(null); // Initialize useRef with null
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);
  const [error, setError] = useState(''); // To handle form errors
  const [success, setSuccess] = useState(''); // To handle success message
  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault(); // Prevent form submission from reloading the page

    const userName = userNameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPass = confirmPasswordRef.current.value;

    // Clear previous success and error messages
    setError('');
    setSuccess('');

    // Validate the form data
    if (!userName || !email || !password || !confirmPass) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPass) {
      setError("Passwords do not match.");
      return;
    }

    // Make the call to API to create the user
    try {
      const response = await fetch("http://localhost:5000/user/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userName,
          email,
          password,
        }),
      });

      if (!response.ok) {
        setError("Unable to register user, please try different email!");
        return;
      }

      const  token  = await response.json();

      if (!token) {
        setError("Incorrect token received.");
        return;
      }

      // Call the login function from AuthContext to log in the user
      login(userName, token);

      // If the registration is successful
      setSuccess("Your account has been created successfully!");

      // Optionally, navigate the user to the login page after a short delay
      setTimeout(() => {
        navigate("/login");
      }, 5000); // Navigate after 3 seconds

    } catch (error) {
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-image'>
      <div className='form-container p-5 rounded bg-white'>
        <form onSubmit={onSubmit}>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-5'>
            <label htmlFor='text'>User Name</label>
            <input type='text' placeholder='Enter Your Name' className='form-control' ref={userNameRef} />
          </div>
          <div className='mb-5'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' ref={emailRef} />
          </div>
          <div className='mb-5'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' ref={passwordRef} />
          </div>
          <div className='mb-5'>
            <label htmlFor='confirm-password'>Confirm Password</label>
            <input type='password' placeholder='Enter Password Again' className='form-control' ref={confirmPasswordRef} />
          </div>
          <div className='d-grid'>
            <button type='submit' className='btn-signin'>Register</button>
          </div>
          <div className='custom-check'>
            <p className='text-right' id='signup'>Already have an account? <Link to="/login" className='ms-2'><b>Login Here</b></Link></p>
          </div>
          {error && <p className="text-danger">{error}</p>} {/* Display error message */}
          {success && <p className="text-success">{success}</p>} {/* Display success message */}
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
