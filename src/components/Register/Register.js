import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            userType: 'student',
        }
        this.handleFName = this.handleFName.bind(this);
        this.handleLName = this.handleLName.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleUserType = this.handleUserType.bind(this);
    }
    
    handleFName = (e) => {
        const { value } = e.target;
        this.setState(() => {
            return { fName: value }
        })
    }
    
    handleLName = (e) => {
        const { value } = e.target;
        this.setState(() => {
            return { lName: value }
        })
    }
    
    handleEmail = (e) => {
        const { value } = e.target;
        this.setState(() => {
            return { email: value }
        })
    }
    
    handlePassword = (e) => {
        const { value } = e.target;
        this.setState(() => {
            return { password: value }
        })
    }
    
    handleUserType = (e) => {
        const { value } = e.target;
        this.setState(() => {
            return { userType: value }
        })
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:3001/register', {
            fName: this.state.fName,
            lName: this.state.lName,
            email: this.state.email,
            password: this.state.password,
            userType: this.state.userType
        })
        .then(console.log)
        .then(this.props.history.push('/'))
        .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        console.log(this.state);
        return (
            <form className='Register'>
                <h1 className='Register__header'>Create an account</h1>
                <h2 className='Register__header2'>It's quick and easy.</h2>
                <input className='Register__input input--fname' onChange={this.handleFName} placeholder='First name' type='text' value={this.state.fname} required />
                <input className='Register__input input--lname' onChange={this.handleLName} placeholder='Last name' type='text' value={this.state.lname} required />
                <input className='Register__input input--email' onChange={this.handleEmail} placeholder='Email' type='email' value={this.state.email} required />
                <input className='Register__input input--password' onChange={this.handlePassword} placeholder='Password' type='password' value={this.state.password} required />
                <label className='Register__label'>Are you a student or an employer?</label>
                <select className='Register__select' value={this.state.userType} onChange={this.handleUserType} required >
                    <option value="student">Student</option>
                    <option value="employer">Employer</option>
                </select>
                <button className='Register__submitButton' onClick={this.handleSubmit}>Create Account</button>
            </form>
        )
    }

}

export default withRouter(Register);