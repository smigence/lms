import React from 'react';

const input100 = {
    color: 'red'
}

class Login extends React.Component {

  render() {
    return (
      <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100">
                    <div className="login100-form validate-form">

                        <span>{this.props.loginResult}</span>

                        <span className="login100-form-title p-b-34 m-b-20">
                            LMS Login
                        </span>
                        <p>Email:</p>
                        <div className="wrap-input100 m-b-20 validate-input m-b-20" data-validate="Type user name">
                            <input onChange={this.props.onEmailChange} id="first" className="input100"
                             name="username" placeholder="User name" value={this.props.email} style={input100}/>
                        </div>
                        <p>Password:</p>
                        <div className="wrap-input100 m-b-20" data-validate="Type password">
                            <input onChange={this.props.onPasswordChange} value={this.props.password} id="psw"
                            className="input100" type="password" name="pass" placeholder="Password" style={input100}/>
                        </div>

                        <div className="container-login100-form-btn">
                        <button className="login100-form-btn" onClick={this.props.submitClick}>
                                Sign in
                            </button>
                        </div>
                    </div>
                    <div className="login100-more" style={{ backgroundImage: 'url("images/bg-01.jpg")' }}></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;
