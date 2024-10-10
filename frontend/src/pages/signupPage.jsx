import React from 'react';
import '../styles/login.css'; // assuming your styles are in the same folder
import { Link } from 'react-router-dom';

const SignupPage = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-image'>
      <div className='form-container p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Sign Up</h3>
          <div className='mb-5'>
            <label htmlFor='text'>User Name</label>
            <input type='text' placeholder='Enter Your Name' className='form-control' />
          </div>
          <div className='mb-5'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-5'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          <div className='mb-5'>
            <label htmlFor='password'>Confirm Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          
          <div className='d-grid'>
            <button className='btn-signin'>Sign Up</button>
          </div>
          <div className='custom-check'>
            <p className='text-right' id='signup'>Having Account <Link to="/login" className='ms-2'><b>Login</b></Link></p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupPage;
