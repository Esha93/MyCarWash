import { put, call } from 'redux-saga/effects';
import axios from 'axios';
import * as actions from '../actions/actions';


export function* loginSaga(action) {
    const loginData = {
        email: action.email,
        password: action.password
    }

    try {
        const response = yield axios.post('http://localhost:8000/login/auth', loginData);
        console.log(response.data);
        yield localStorage.setItem('userId', response.data.userId);
        yield localStorage.setItem('token', response.data.token);
        yield put(actions.loginSuccess(response.data.userId, true));
    } catch(error) {
        yield alert('Please enter valid credentials');
    }
    
}

export function* checkAuthSaga(action) {
    const token = localStorage.getItem('token');
    if(!token) {
        yield put(actions.logout());
    } else {
        const userId = yield localStorage.getItem('userId');
        yield put(actions.loginSuccess(userId, true));
    }
}

export function* logoutSaga(action) {
    yield call([localStorage, "removeItem"], "token");
    yield call([localStorage, "removeItem"], "userId");
    yield put(actions.logoutSuccess());
  }