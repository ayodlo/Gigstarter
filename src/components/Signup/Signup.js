import React from 'react';
import './Signup.css';

const Signup = () => {
    return (
        <div className='Signup'>
            <h1 className='Signup__header'>Create an account</h1>
            <h2 className='Signup__header2'>It's quick and easy.</h2>
            <input className='Signup__input input--fname' placeholder='First name' type='text' />
            <input className='Signup__input input--lname' placeholder='Last name' type='text' />
            <input className='Signup__input input--email' placeholder='Email' type='email' />
            <input className='Signup__input input--pasword' placeholder='Password' type='password' />
            <label className='Signup__label'>Are you a student or an employer?</label>
                <select className='Signup__select' value={null} onChange={null}>
                    <option value="student">Student</option>
                    <option value="employer">Employer</option>
                </select>
        </div>
    )
}

export default Signup;