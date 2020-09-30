import React from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

    handleSubmit = (e) => {
        const { handleLoginLogout } = this.props;
        e.preventDefault();
        axios.post('http://localhost:3001/login', {
            email: this.state.email,
            password: this.state.password
        })
        .then(console.log)
        .then(handleLoginLogout(1))
        .then(this.props.history.push('/'))
        .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className='Login'>
                <h1 className='Login__header'>Login</h1>
                <h2 className='Login__header2'>Welcome back!</h2>
                <input className='Login__input input--email' onChange={this.handleEmail} placeholder='Email' type='email' value={this.state.email} />
                <input className='Login__input input--password' onChange={this.handlePassword} placeholder='Password' type='password' value={this.state.password} />
                <button className='Login__submitButton' onClick={this.handleSubmit}>Submit</button>
            </div>
        )
    }
}

export default Login;