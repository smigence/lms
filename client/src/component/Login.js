import React, { Component } from 'react';
import {Link} from 'react-router-dom';

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
  
  handleEmailChange(event) {this.setState({emailField: event.target.value});}
  handlePswChange(eve) {this.setState({pswField: eve.target.value});}

  render() {
    return (
      <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <form onSubmit={this.submitHandler} className="login100-form validate-form">
                        <span className="login100-form-title p-b-34">
                            Account Login
                        </span>
                        
                        <div className="wrap-input100 rs1-wrap-input100 validate-input m-b-20" data-validate="Type user name">
                            <input onChange={this.handleEmailChange} id="first" className="input100"
                             name="username" placeholder="User name" value={this.state.emailField}/>
                            <span className="focus-input100"></span>
                        </div>
                        <div className="wrap-input100 rs2-wrap-input100 validate-input m-b-20" data-validate="Type password">
                            <input onChange={this.handlePswChange} value={this.state.pswField} id="psw"
                            className="input100" type="password" name="pass" placeholder="Password"/>
                            <span className="focus-input100"></span>
                        </div>
                        
                        <div className="container-login100-form-btn">
                            <Link to="/homepage">
                            <button type="submit" className="login100-form-btn">
                                Sign in
                            </button></Link>
                        </div>

                    </form>

                    <div className="login100-more" style={{backgroundImage: 'url("images/bg-01.jpg")'}}></div>
                </div>
            </div>
        </div>
    );
  }
}

export default Login;
