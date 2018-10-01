import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,withRouter } from 'react-router-dom';
import conf from './component/Config';
import axios from 'axios';
import AsyncCp from './component/AsyncCp';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:3001'
});

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {mailAddress: "",
          password: "",
          loginResult: "",
          accountState: "",
          courses: ""
        };

    this.emailChangeHandle = this.emailChangeHandle.bind(this);
    this.passwordChangeHandle = this.passwordChangeHandle.bind(this);
    this.submitClickHandle = this.submitClickHandle.bind(this);
  }

  emailChangeHandle(event) {
    this.setState({ mailAddress: event.target.value })
  }

  passwordChangeHandle(event) {
    this.setState({ password: event.target.value })
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
      const account = res.data;
      const link = /courseLearn/+account.idUser;
      fetch (link).then(res => res.data).
      then(courses => this.setState({loginResult: "",
      accountState: account,
      courses: courses
    }));
      
    }
    }).catch(err => {
      console.log("Fail");
    });
  }
  
  getDataApi (link,key,data) {
    link+=key;
    fetch (link)
    .then(res => data=res.data)
  }

  componentDidMount () {
    

    this.setState({ loginResult: "" });
    console.log("Success");
  }
  // }).catch(err => {
  //   console.log("Fail");
  // });
  // }

  // getDataApi (key) {
  //   conf.api_link+=key;
  //   fetch (conf.api_link)
  //   .then(res => res.json())
  //   .then(accounts => this.setState({accounts})); 
  // }

  // componentDidMount () {

  // }
  render() {
    if (this.state.accountState==="") {
      return (
            <Router >
                    <Switch>
                        <Route exact path = '/' render = {(props) => 
                        (<AsyncCp.Login {...props} email={this.state.email} password={this.state.password} 
                         onEmailChange = {this.emailChangeHandle} onPasswordChange = {this.passwordChangeHandle} 
                         submitClick = {this.submitClickHandle} loginResult={this.state.loginResult}/>)}></Route>
                        <Route path = '*' component = {() => {return <div>Page not found</div>}}></Route>
                    </Switch>
            </Router>
      );
    }
    else {
      return (
        <Router >
                <Switch>
                    <Route exact path = '/' render = {(props) => (<AsyncCp.Home {...props} courses = {this.state.courses}/>)}></Route>

                    <Route exact path = '/course' component = {AsyncCp.Course}></Route>
                    <Route exact path = '/management-course' component = {AsyncCp.ManagementCourse}></Route>
                    <Route exact path = '/list-lesson' component = {AsyncCp.Lesson}></Route>
                    <Route exact path = '/viewmore' component = {AsyncCp.Viewmore}></Route>
                    <Route exact path='/overview' component={AsyncCp.Overview}></Route>
                    <Route exact path='/statics' component={AsyncCp.Statics}></Route>
                    <Route exact path='/settings' component={AsyncCp.Settings}></Route>
                    <Route exact path = '/addlesson' component = {AsyncCp.AddLesson}></Route>
                    
                    <Route path = '*' component = {() => {return <div>Page not found</div>}}></Route>
                </Switch>
        </Router>
);
    }
  }
}

export default App;
