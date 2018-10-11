import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import registerServiceWorker from './registerServiceWorker';

const account = (sessionStorage.getItem('account') === null) ? "" : JSON.parse(sessionStorage.getItem('account'));
const coursesLeaner = (sessionStorage.getItem('coursesLeaner') === null) ? [] : JSON.parse(sessionStorage.getItem('coursesLeaner'));
const coursesManager = (sessionStorage.getItem('coursesManager') === null) ? [] : JSON.parse(sessionStorage.getItem('coursesManager'));

const initialState = {
    account: account,
    loginResult: "",
    coursesLeaner: coursesLeaner,
    coursesManager: coursesManager
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case 'LoginFail': return {
            ...state,
            loginResult: action.loginResult
        }
        case 'getCoursesLeanerSuccessfully': {
            sessionStorage.setItem('account', JSON.stringify(action.account));
            sessionStorage.setItem('coursesLeaner', JSON.stringify(action.coursesLeaner));
            return {
                ...state,
                account: action.account,
                loginResult: action.loginResult,
                coursesLeaner: action.coursesLeaner
            }
        }
        case 'getCoursesLeanerFail': {
            sessionStorage.setItem('account', JSON.stringify(action.account));
            return {
                ...state,
                account: action.account,
                loginResult: action.loginResult
            }
        }
        case 'getCoursesManagerSuccessfully': {
            sessionStorage.setItem('account', JSON.stringify(action.account));
            sessionStorage.setItem('coursesManager', JSON.stringify(action.coursesManager));
            return {
                ...state,
                account: action.account,
                loginResult: action.loginResult,
                coursesManager: action.coursesManager
            }
        }
        case 'getCoursesManagerFail': {
            sessionStorage.setItem('account', JSON.stringify(action.account));
            return {
                ...state,
                account: action.account,
                loginResult: action.loginResult
            }
        }
        case 'logout': {
            sessionStorage.clear();
            return {
                ...state,
                account: action.account,
                coursesManager: action.coursesManager,
                coursesLeaner: action.coursesLeaner
            }
        }
        default: return state;
    }
}

const store = createStore(reducer);

const AppWithRedux = () =>
    <Provider store={store}>
        <App />
    </Provider>

ReactDOM.render(<AppWithRedux />, document.getElementById('root'));
registerServiceWorker();
