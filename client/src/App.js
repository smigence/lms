import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {BrowserRouter as Router,Route,Switch,withRouter} from 'react-router-dom';
import conf from './component/Config';
import axios from 'axios';
import AsyncCp from './component/AsyncCp';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:3002'
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {mailAddress: "",
          password: "",
          loginResult: ""
        };

    this.emailChangeHandle = this.emailChangeHandle.bind(this);
    this.passwordChangeHandle =this.passwordChangeHandle.bind(this);
    this.submitClickHandle = this.submitClickHandle.bind(this);
  }

  emailChangeHandle (event) {
    this.setState({mailAddress: event.target.value})
  }

  passwordChangeHandle(event) {
    this.setState({password: event.target.value})
  }

  submitClickHandle = () => {
    console.log(this.state.mailAddress+" "+this.state.password);
    instanceAxios.post(conf.login_api,{email: this.state.mailAddress, password: this.state.password})
    .then(res => {
      if(res.data===false) {
        this.setState({loginResult: "Login Unsuccessfully"})
        console.log(this.state.loginResult);
      }
      else {
      this.setState({loginResult: ""});
      this.props.history.push("/homepage")
      console.log("Success");}
    }).catch(err => {
      console.log("Fail");
    });
  }
  
  getDataApi (key) {
    conf.api_link+=key;
    fetch (conf.api_link)
    .then(res => res.json())
    .then(accounts => this.setState({accounts})); 
  }

  componentDidMount () {
    
  }
  render() {
    return (
            <Router >
              <div>
                    <Switch>
                        <Route exact path = '/' render = {(props) => 
                        (<AsyncCp.Login {...props} email={this.state.email} password={this.state.password} 
                         onEmailChange = {this.emailChangeHandle} onPasswordChange = {this.passwordChangeHandle} 
                         submitClick = {this.submitClickHandle} loginResult={this.state.loginResult}/>)}></Route>

                        <Route exact path = '/homepage'   component = {AsyncCp.Home}></Route>

                        <Route exact path = '/course'   component = {AsyncCp.Course}></Route>

                        <Route exact path = '/list-lesson' component = {AsyncCp.Lesson}></Route>
                        
                        <Route path = '*' component = {() => {return <div>Page not found</div>}}></Route>

                        <Route exact path='/overview' component={AsyncCp.Overview}></Route>
                        <Route exact path='/statics' component={AsyncCp.Statics}></Route>
                        <Route exact path='/settings' component={AsyncCp.Settings}></Route>
                    </Switch>
              </div>
            </Router>
    );
  }
}

export default App;
