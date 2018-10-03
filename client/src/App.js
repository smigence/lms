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
          coursesLeaner: [],
          coursesManager: [],
          file : {}
        };

    this.emailChangeHandle = this.emailChangeHandle.bind(this);
    this.passwordChangeHandle = this.passwordChangeHandle.bind(this);
    this.submitClickHandle = this.submitClickHandle.bind(this);

    this.fileChangeHandle = this.fileChangeHandle.bind(this);
    this.uploadClickHandle = this.uploadClickHandle.bind(this);

    }
  
    fileChangeHandle(event) {
    this.setState({ file: event.target.files[0] });
    // this.changeState = this.changeState.bind(this);
    }

  emailChangeHandle(event) {
    this.setState({ mailAddress: event.target.value });
  }

  passwordChangeHandle(event) {
    this.setState({ password: event.target.value });
  }

 /* changeState(account,courses) {
    this.setState({loginResult: "",
                        account: account,
                        coursesLeaner: courses
                        });
  }*/

  submitClickHandle = () => {
    console.log(this.state.mailAddress+" "+this.state.password);
    instanceAxios.post(conf.login_api,{email: this.state.mailAddress, password: this.state.password})
    .then(res => {
      if(res.data===false) {
        this.setState({loginResult: "Login Unsuccessfully"});
      }
      else {
      //const callback = this.changeState;
      const account = res.data;
      let link = /courseLearn/+account.idUser;
      
      fetch (link).then(res => res.json())
      .then(courses => {
        if (courses.notification===undefined)    return this.setState({loginResult: "",
                                                        account: account,
                                                        coursesLeaner: courses
                                                        });
        else return this.setState({loginResult: "", account: account})
        });
      
      link = /courseManage/+account.idUser; 

      fetch (link).then(res => res.json())
      .then(courses => {
        if (courses.notification===undefined)    return this.setState({loginResult: "",
                                                        account: account,
                                                        coursesManager: courses
                                                        });
        else return this.setState({loginResult: "", account: account})
        });
      
    }
    }).catch(err => {
      console.log("Fail");
    });
  }
  
 /* getDataApi (link,callback) {
    fetch (link).then(res => res.json())
    .then(courses => {
      if (courses.notification===undefined)    return callback(this.state);
      else return this.setState({loginResult: "", account: account})
      });
  }*/

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
                    <Route exact path = '/' render = {(props) => (<AsyncCp.Home {...props} courses = {this.state.coursesLeaner}/>)}></Route>
                    <Route exact path = '/management-course' render = {(props) => <AsyncCp.ManagementCourse {...props} courses={this.state.coursesManager}/>}></Route>
                    <Route exact path = '/list-lesson' component = {AsyncCp.Lesson}></Route>
                    <Route exact path='/overview/:id/:type' render = { (props) => <AsyncCp.Overview {...props} coursesLeaner={this.state.coursesLeaner}
                    coursesManager = {this.state.coursesManager} account={this.state.account}/>}></Route>
                    <Route exact path = '/viewmore' component = {AsyncCp.Viewmore}></Route>
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
