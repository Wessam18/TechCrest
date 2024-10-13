import React, { useRef, useEffect, useState } from 'react';
import '../styles/login.css'; // assuming your styles are in the same folder
import { Link, useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentUser, setCurrentUser] = useState('');

  // Check if the user is already logged in
  useEffect(() => {
    const loggedInUserEmail = localStorage.getItem('signUp');
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Find the currently logged-in user by email
    const user = users.find(user => user.email === loggedInUserEmail);

    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user.name); // Set the logged-in user's name
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    const enteredEmail = email.current.value;
    const enteredPassword = password.current.value;

    // Retrieve users from localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === enteredEmail && user.password === enteredPassword);

    if (user) {
      // Successful login
      localStorage.setItem('signUp', enteredEmail); // Mark the user as logged in
      alert('Login successful!');
      setIsLoggedIn(true); // Update state to reflect that the user is logged in
      setCurrentUser(user.name); // Set the user's name
    } else {
      alert('Invalid email or password');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('signUp'); // Remove the logged-in status
    setIsLoggedIn(false); // Update state to reflect that the user is logged out
    alert('You have been logged out.');
    navigate('/'); // Redirect to home after logout
  };

  const handleDeleteAccount = () => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const loggedInUserEmail = localStorage.getItem('signUp');

    // Filter out the user that wants to delete their account
    const updatedUsers = users.filter(user => user.email !== loggedInUserEmail);

    // Update localStorage with the new user list
    localStorage.setItem('users', JSON.stringify(updatedUsers));

    // Log out the user and remove them from signUp
    localStorage.removeItem('signUp');
    alert('Account deleted successfully.');
    setIsLoggedIn(false); // Update state to reflect the user is logged out
    navigate('/'); // Redirect to home after account deletion
  };

  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-image'>
      <div className='form-container p-5 rounded bg-white'>
        {isLoggedIn ? (
          <div className='text-center'>
            <h3>Welcome, {currentUser}!</h3>
            <div className='d-grid gap-3'>
              <button className='btn btn-danger' onClick={handleLogout}>Logout</button>
              <button className='btn btn-warning' onClick={handleDeleteAccount}>Delete Account</button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleLogin}>
            <h3 className='text-center'>Sign In</h3>
            <div className='mb-5'>
              <label htmlFor='email'>Email</label>
              <input type='email' placeholder='Enter Email' className='form-control' ref={email} />
            </div>
            <div className='mb-5'>
              <label htmlFor='password'>Password</label>
              <input type='password' placeholder='Enter Password' className='form-control' ref={password} />
            </div>
            <div className='d-grid'>
              <button type='submit' className='btn-signin'>Login</button>
            </div>
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
