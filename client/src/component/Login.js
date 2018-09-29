import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const input100 = {
    color: 'red'
}

class Login extends React.Component {
    constructor() {
        super();
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePswChange = this.handlePswChange.bind(this);
        this.state = {
            emailField: '',
            pswField: ''
        };
    }

    submitHandler(evt) {
        evt.preventDefault();

        this.setState({
            emailField: '',
            pswField: ''
        });


    }

    handleEmailChange(event) { this.setState({ emailField: event.target.value }); }
    handlePswChange(eve) { this.setState({ pswField: eve.target.value }); }

    render() {
        return (
            <div className="limiter">
                <div className="container-login100">
                    <div className="wrap-login100">
                        <form onSubmit={this.submitHandler} className="login100-form validate-form">
                            <span className="login100-form-title p-b-34 m-b-20">
                                LMS Login
                        </span>
                            <p>Email:</p>
                            <div className="wrap-input100 m-b-20" data-validate="Type user name">
                                <input onChange={this.handleEmailChange} id="first" className="input100" style={input100}
                                    placeholder="User name" value={this.state.emailField} type="text" />

                            </div>
                            <p>Password:</p>
                            <div className="wrap-input100 m-b-20" data-validate="Type user name">
                                <input onChange={this.handlePswChange} id="first1" className="input100" style={input100}
                                    placeholder="Password" value={this.state.pswField} type="password" />

                            </div>

                            <div className="container-login100-form-btn">
                                <Link to="/homepage">
                                    <button type="submit" className="login100-form-btn">
                                        Sign in
                            </button></Link>
                            </div>

                        </form>

                        <div className="login100-more" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
