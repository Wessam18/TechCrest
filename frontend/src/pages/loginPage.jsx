import React, { useRef, useEffect, useState } from 'react';
import '../styles/login.css'; // assuming your styles are in the same folder
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Import useAuth from your AuthContext

const LoginPage = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');
  const [error, setError] = useState(''); // To handle form errors

  const { login } = useAuth(); // Use login from AuthContext

  useEffect(() => {
    // Check if the user is already logged in
    const loggedInUserEmail = localStorage.getItem('email');
    if (loggedInUserEmail) {
      setIsLoggedIn(true);
      setCurrentUser(loggedInUserEmail); // Set the logged-in user's email
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // Validate the form data
    if (!email || !password) {
      setError("Check submitted data.");
      return;
    }

    try {
      // Make the call to API to login the user
      const response = await fetch(`http://localhost:5000/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        setError('Invalid email or password.');
        return;
      }

      const token = await response.json();
      if (!token) {
        setError('Incorrect token received.');
        return;
      }

      // Use the login function from AuthContext to log in the user
      login(email, token);
      localStorage.setItem('email', email); // Mark the user as logged in
      localStorage.setItem('token', token); // Save the token
      setIsLoggedIn(true);
      setCurrentUser(email); // Set the user's email
      navigate('/'); // Redirect to home after login
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('email'); // Remove the email from localStorage
    localStorage.removeItem('token'); // Remove the token
    setIsLoggedIn(false);
    setCurrentUser(''); // Clear the user
    alert('You have been logged out.');
    location.reload()
    navigate('/'); // Redirect to home after logout
  };


  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-image'>
      <div className='form-container p-5 rounded bg-white'>
        {isLoggedIn ? (
          <div className='text-center'>
            <h3>Welcome, {currentUser}!</h3>
            <div className='d-grid gap-3'>
              <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-5'>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='Enter Email' className='form-control' ref={emailRef} />
            </div>
            <div className='mb-5'>
              <label htmlFor='password'>Password</label>
              <input type='password' placeholder='Enter Password' className='form-control' ref={passwordRef} />
            </div>
            <div className='d-grid'>
              <button type='submit' className='btn-signin'>Login</button>
            </div>
            {error && <p className="text-danger">{error}</p>} {/* Display error message */}
            <div className='custom-check'>
              <div>
                <input type='checkbox' className='custom-control custom-checkbox' id='check' />
                <label htmlFor='check' className='custom-input-label ms-2'>Remember me</label>
              </div>
              <p className='text-right'>Forgot <a href=''><b>Password?</b></a></p>
            </div>
            <p className='text-right' id='signup'>Don't have an account? <Link to="/signup" className='ms-2'><b>Register Here</b></Link></p>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;