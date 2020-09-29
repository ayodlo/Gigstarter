import React from 'react';
import './Login.css';

const Login = () => {
    return (
        <div className='Login'>
            <h1 className='Login__header'>Login</h1>
            <h2 className='Login__header2'>Welcome back!</h2>
            <input className='Login__input input--email' placeholder='Email' type='email' />
            <input className='Login__input input--pasword' placeholder='Password' type='password' />
        </div>
    )
}

export default Login;