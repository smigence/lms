import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import conf from './component/Config';
import axios from 'axios';
import AsyncCp from './component/AsyncCp';

const instanceAxios = axios.create({
  baseURL: 'http://localhost:3002'
});

class App extends Component {

  state = { accounts: [] };

  // submitForm () {
  //   instanceAxios.post(conf.add_api_link,{email: 'trinhgiang520@gmail.com', password: '123456'})
  //   .then(res => {
  //     if(res.data===false) console.log("Login Fail")
  //     else console.log(res.data.name);
  //   }).catch(err => {
  //     console.log("Fail");
  //   });
  // }

  // componentDidMount () {
  //   const x=2;
  //   conf.api_link+=x;
  //   fetch (conf.api_link)
  //   .then(res => res.json())
  //   .then(accounts => this.setState({accounts})); 
  // }
  render() {
    return (
      <Router >
        <div>
          <Switch>
            <Route exact path='/' component={AsyncCp.Login}></Route>
            <Route exact path='/homepage' component={AsyncCp.Home}></Route>
            <Route exact path='/course' component={AsyncCp.Course}></Route>
            <Route exact path='/list-lesson' component={AsyncCp.Lesson}></Route>
            <Route exact path='/overview' component={AsyncCp.Overview}></Route>
            <Route exact path='/statics' component={AsyncCp.Statics}></Route>
            <Route exact path='/settings' component={AsyncCp.Settings}></Route>
            <Route path='*' component={() => { return <div>Page not found</div> }}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
