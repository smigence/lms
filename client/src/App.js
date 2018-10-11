import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import conf from './component/Config';
import axios from 'axios';
import AsyncCp from './component/AsyncCp';
import { connect } from 'react-redux';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:3001'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailAddress: "",
      password: "",
      file: {},
      coursename: "",
      coursedescription: "",
      lessons: []
    };

    this.emailChangeHandle = this.emailChangeHandle.bind(this);
    this.passwordChangeHandle = this.passwordChangeHandle.bind(this);
    this.submitClickHandle = this.submitClickHandle.bind(this);

    this.fileChangeHandle = this.fileChangeHandle.bind(this);
    //this.uploadClickHandle = this.uploadClickHandle.bind(this);

    this.onGeneralSettingsSubmit = this.onGeneralSettingsSubmit.bind(this);
    this.coursenameChangeHandle = this.coursenameChangeHandle.bind(this);
    this.coursedescriptionChangeHandle = this.coursedescriptionChangeHandle.bind(this);
    this.courseClickHandle = this.courseClickHandle.bind(this);
  }

  handleLogoutClick() {
    console.log("aaaaaaaaaaa");
    this.props.dispatch({
      account: "",
      coursesLeaner: [],
      coursesManager: [],
      type: "logout"
    });
  }

  courseClickHandle(id) {
    fetch("/lesson/" + id).then(res => res.json())
      .then(lessons => {
        if (lessons.notification === undefined) {
          return this.setState({
            lessons: lessons
          });
        }
      })
      .catch(err =>
        console.log("Connect fail: " + err));
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

  coursenameChangeHandle(event) {
    this.setState({ coursename: event.target.value });
  }

  coursedescriptionChangeHandle(event) {
    this.setState({ coursedescription: event.target.value });
  }


  /* changeState(account,courses) {
     this.setState({loginResult: "",
                         account: account,
                         coursesLeaner: courses
                         });
   }*/

  submitClickHandle = (e) => {
    e.preventDefault();
    console.log(this.state.mailAddress + " " + this.state.password);
    instanceAxios.post(conf.login_api, { email: this.state.mailAddress, password: this.state.password })
      .then(res => {
        if (res.data === false) {
          this.props.dispatch({
            loginResult: "Login Unsuccessfully",
            type: "LoginFail"
          });
        }
        else {
          const account = res.data;
          let link = /courseLearn/ + account.idUser;

          fetch(link).then(res => res.json())
            .then(courses => {
              if (courses.notification === undefined) this.props.dispatch({
                loginResult: "",
                account: account,
                coursesLeaner: courses,
                type: "getCoursesLeanerSuccessfully"
              });
              else this.props.dispatch({
                loginResult: "",
                account: account,
                type: "getCoursesLeanerFail"
              });
            });

          link = /courseManage/ + account.idUser;

          fetch(link).then(res => res.json())
            .then(courses => {
              if (courses.notification === undefined) this.props.dispatch({
                loginResult: "",
                account: account,
                coursesManager: courses,
                type: "getCoursesManagerSuccessfully"
              });
              else this.props.dispatch({
                loginResult: "",
                account: account,
                type: "getCoursesManagerFail"
              })
            });

        }
      }).catch(err => {
        console.log("Fail");
      });
  }

  onGeneralSettingsSubmit = (eve, idcourse, defaultname, defaultdescription) => {
    // eve.preventDefault();
    this.state.coursename === '' ? this.state.coursename = defaultname : true;
    this.state.coursedescription == '' ? this.state.coursedescription = defaultdescription : true;
    instanceAxios.post(conf.update_course_general_api + '/' + idcourse, {
      coursename: this.state.coursename,
      coursedescription: this.state.coursedescription
    })
      .then(res => {
        if (res.data == 'Yes') console.log('Ok');
        else console.log('lel');
      }).catch(errr => {
        console.log("Fail");
      })
  };

  uploadClickHandle = (eve) => {
    eve.preventDefault();
    console.log(this.state.file);
    let formData = new FormData();
    let descript = '';
    formData.append('description', descript);
    formData.append('selectedfile', this.state.file);
    instanceAxios.post("/", formData)
      .then(res => {
        this.setState({ uploadResult: "fa fa-check fa-lg mt-4" })
        console.log("successfully", res);
      }).catch(err => {
        this.setState({ uploadResult: "fa fa-ban" })
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
    console.log(this.props.account);
    if (this.props.account === "") {
      return (
        <Router >
          <Switch>
            <Route exact path='/' render={(props) =>
              (<AsyncCp.Login {...props} email={this.state.email} password={this.state.password}
                onEmailChange={this.emailChangeHandle} onPasswordChange={this.passwordChangeHandle}
                submitClick={this.submitClickHandle} loginResult={this.props.loginResult} />)}></Route>
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      );
    }
    else {
      return (
        <Router >
          <Switch>
            <Route exact path='/' render={(props) => (<AsyncCp.Home {...props} courses={this.props.coursesLeaner}
              onCourseClick={this.courseClickHandle}
              onLogoutClick={this.handleLogoutClick} />)}></Route>
            <Route exact path='/management-course' render={(props) => <AsyncCp.ManagementCourse {...props} courses={this.props.coursesManager} />}></Route>
            <Route exact path='/overview/:id/:type' render={(props) => <AsyncCp.Overview {...props}
              coursesLeaner={this.props.coursesLeaner} coursesManager={this.props.coursesManager} account={this.props.account}
              onGeneralSettingsSubmit={this.onGeneralSettingsSubmit}
              coursenameChangeHandle={this.coursenameChangeHandle}
              coursedescriptionChangeHandle={this.coursedescriptionChangeHandle}
              lessons={this.state.lessons} />}>
            </Route>
            <Route exact path='/viewmore' component={AsyncCp.Viewmore}></Route>
            <Route exact path='/addlesson' component={AsyncCp.AddLesson}></Route>
            <Route path='*' component={() => { return <div>Page not found</div> }}></Route>
          </Switch>
        </Router>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App);