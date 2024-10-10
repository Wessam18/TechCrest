import React from 'react';
import '../styles/login.css'; // assuming your styles are in the same folder
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <div className='login template d-flex justify-content-center align-items-center vh-100 bg-image'>
      <div className='form-container p-5 rounded bg-white'>
        <form>
          <h3 className='text-center'>Sign In</h3>
          <div className='mb-5'>
            <label htmlFor='email'>Email</label>
            <input type='email' placeholder='Enter Email' className='form-control' />
          </div>
          <div className='mb-5'>
            <label htmlFor='password'>Password</label>
            <input type='password' placeholder='Enter Password' className='form-control' />
          </div>
          <div className='d-grid'>
            <button className='btn-signin'>Sign in</button>
          </div>
          <div className='custom-check'>
            <div >
              <input type='checkbox' className='custom-control custom-checkbox' id='check' />
              <label htmlFor='check' className='custom-input-label ms-2'>Remember me</label>
            </div>
            <p className='text-right'>Forgot <a href=''><b>Password ?</b></a></p>
          </div>
          <p className='text-right' id='signup'>Don't Have Account <Link to="/signup" className='ms-2'><b>Sign Up</b></Link></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
