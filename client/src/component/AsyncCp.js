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
  loader: () => import("./course-content"),
  loading: LoadingPage
});

const Overview = Loadable({
  loader: () => import("./course-overview"),
  loading: LoadingPage
});

const Statics = Loadable({
  loader: () => import("./course-statics"),
  loading: LoadingPage
});

const Settings = Loadable({
  loader: () => import("./course-settings"),
  loading: LoadingPage
});

const Viewmore = Loadable({
  loader: () => import("./statics-viewmore"),
  loading: LoadingPage
});

const ManagementCourse = Loadable({
  loader: () => import("./management-course"),
  loading: LoadingPage
});

const AddLesson = Loadable({
  loader: () => import("./settings-addlesson"),
  loading: LoadingPage
});

const EditLesson = Loadable({
  loader: () => import("./settings-editlesson"),
  loading: LoadingPage
});

export default {
  Login, Home, Course, Lesson, Overview,
  Statics, Settings, Viewmore, ManagementCourse,
  AddLesson, EditLesson
};
