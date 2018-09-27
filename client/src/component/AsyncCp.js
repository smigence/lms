import React from 'react';
import Loadable from 'react-loadable';

const LoadingPage = () => { return <h3>Page is loading ... </h3> };
 
const Login = Loadable({
    loader: () => import("./Login"),
    loading: LoadingPage
});

const Home = Loadable({
  loader: () => import("./Home"),
  loading: LoadingPage
});

const Course = Loadable({
  loader: () => import("./Course"),
  loading: LoadingPage
});

const Lesson = Loadable({
  loader: () => import("./Lesson"),
  loading: LoadingPage
});

export default {Login,Home,Course,Lesson};
