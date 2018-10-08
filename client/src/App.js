import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import conf from './component/Config';
import axios from 'axios';
import AsyncCp from './component/AsyncCp';
var path = require('path');


const instanceAxios = axios.create({
  baseURL: 'http://localhost:3001'
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mailAddress: "",
      password: "",
      loginResult: "",
      account: "",
      coursesLeaner: [],
      coursesManager: [],
      file: {},
      coursename: "",
      coursedescription: "",
      lessonDescription: ""
    };

    this.emailChangeHandle = this.emailChangeHandle.bind(this);
    this.passwordChangeHandle = this.passwordChangeHandle.bind(this);
    this.submitClickHandle = this.submitClickHandle.bind(this);

    this.fileChangeHandle = this.fileChangeHandle.bind(this);
    //this.uploadClickHandle = this.uploadClickHandle.bind(this);

    this.onGeneralSettingsSubmit = this.onGeneralSettingsSubmit.bind(this);
    this.coursenameChangeHandle = this.coursenameChangeHandle.bind(this);
    this.coursedescriptionChangeHandle = this.coursedescriptionChangeHandle.bind(this);

    this.onAddLessonSubmitClick = this.onAddLessonSubmitClick.bind(this);
    this.lessonDescriptionChangeHandle = this.lessonDescriptionChangeHandle.bind(this);
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

  lessonDescriptionChangeHandle(event) {
    this.setState({ lessonDescription: event.target.value });
  }

  /* changeState(account,courses) {
     this.setState({loginResult: "",
                         account: account,
                         coursesLeaner: courses
                         });
   }*/

  submitClickHandle = () => {
    instanceAxios.post(conf.login_api, { email: this.state.mailAddress, password: this.state.password })
      .then(res => {
        if (res.data === false) {
          this.setState({ loginResult: "Login Unsuccessfully" });
        }
        else {
          //const callback = this.changeState;
          const account = res.data;
          let link = /courseLearn/ + account.idUser;

          fetch(link).then(res => res.json())
            .then(courses => {
              if (courses.notification === undefined) return this.setState({
                loginResult: "",
                account: account,
                coursesLeaner: courses
              });
              else return this.setState({ loginResult: "", account: account })
            });

          link = /courseManage/ + account.idUser;

          fetch(link).then(res => res.json())
            .then(courses => {
              if (courses.notification === undefined) return this.setState({
                loginResult: "",
                account: account,
                coursesManager: courses
              });
              else return this.setState({ loginResult: "", account: account })
            });

        }
      }).catch(err => {
        console.log("Fail");
      });
  }

  onGeneralSettingsSubmit = (eve, idcourse, defaultname, defaultdescription) => {
    // eve.preventDefault();
    this.state.coursename == '' ? this.state.coursename = defaultname : true;
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

  onAddLessonSubmitClick = (eve, idManageCourse) => {
    eve.preventDefault();
    instanceAxios.post(conf.insert_lesson_api_link + '/' + idManageCourse, {
      lessonDescription: this.state.lessonDescription,
    })
      .then(res => {
          let formData = new FormData();
          let descript = '';
          formData.append('idlesson', res.data[0].idLesson);
          formData.append('selectedfile', this.state.file);
          instanceAxios.post("/", formData)
            .then(res => {
              if (res.data == 'ok') this.setState({ uploadResult: "fa fa-check fa-lg mt-4" });
              else this.setState({ uploadResult: "fa fa-ban" });
            }).catch(err => {
              this.setState({ uploadResult: "fa fa-ban" })
            });
      }).catch(errr => {
        console.log("Fail");
      })
  }

  uploadClickHandle = (eve) => {
    eve.preventDefault();
    let formData = new FormData();
    let descript = '';
    formData.append('description', descript);
    formData.append('selectedfile', this.state.file);
    instanceAxios.post("/", formData)
      .then(res => {
        if (res.data == 'ok') this.setState({ uploadResult: "fa fa-check fa-lg mt-4" });
        else this.setState({ uploadResult: "fa fa-ban" });
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
    if (this.state.account === "") {
      return (
        <Router >
          <Switch>
            <Route exact path='/' render={(props) =>
              (<AsyncCp.Login {...props} email={this.state.email} password={this.state.password}
                onEmailChange={this.emailChangeHandle} onPasswordChange={this.passwordChangeHandle}
                submitClick={this.submitClickHandle} loginResult={this.state.loginResult} />)}></Route>
            <Redirect from='*' to='/' />
          </Switch>
        </Router>
      );
    }
    else {
      return (
        <Router >
          <Switch>
            <Route exact path='/' render={(props) => (<AsyncCp.Home {...props} courses={this.state.coursesLeaner} />)}></Route>
            <Route exact path='/management-course' render={(props) => <AsyncCp.ManagementCourse {...props}
              courses={this.state.coursesManager} />}></Route>
            <Route exact path='/overview/:id/:type' render={(props) => <AsyncCp.Overview {...props}
              coursesLeaner={this.state.coursesLeaner} coursesManager={this.state.coursesManager} account={this.state.account}
              onGeneralSettingsSubmit={this.onGeneralSettingsSubmit}
              coursenameChangeHandle={this.coursenameChangeHandle}
              coursedescriptionChangeHandle={this.coursedescriptionChangeHandle} />}>
            </Route>
            <Route exact path='/viewmore' component={AsyncCp.Viewmore}></Route>
            <Route exact path='/addlesson/:id' render={(props) => (<AsyncCp.AddLesson {...props}
              lessonDescriptionChangeHandle={this.lessonDescriptionChangeHandle}
              uploadClickHandle={this.uploadClickHandle}
              fileChangeHandle={this.fileChangeHandle}
              uploadResult={this.state.uploadResult}
              onAddLessonSubmitClick={this.onAddLessonSubmitClick}
            />)}>
            </Route>
            <Route exact path='/editlesson/:id' render={(props) => (<AsyncCp.EditLesson {...props}

            />)}>
            </Route>
            <Route path='*' component={() => { return <div>Page not found</div> }}></Route>
          </Switch>
        </Router>
      );
    }
  }
}

export default App;
