import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch,Redirect} from 'react-router-dom';
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
          account: "",
          courses: []
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
      }
      else {
      const account = res.data;
      const link = /courseLearn/+account.idUser;
      fetch (link).then(res => res.json())
      .then(courses => {
        if (courses.notification===undefined)   return this.setState({loginResult: "", account: account})
          else return this.setState({loginResult: "",
                    account: account,
                    courses: courses
      })});
      
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

  render() {
    if (this.state.account==="") {
      return (
            <Router >
                    <Switch>
                        <Route exact path = '/' render = {(props) => 
                        (<AsyncCp.Login {...props} email={this.state.email} password={this.state.password} 
                         onEmailChange = {this.emailChangeHandle} onPasswordChange = {this.passwordChangeHandle} 
                         submitClick = {this.submitClickHandle} loginResult={this.state.loginResult}/>)}></Route>
                        <Redirect  from='*' to='/' />
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
