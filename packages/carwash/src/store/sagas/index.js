import { takeEvery } from 'redux-saga/effects';   
import * as actionTypes from '../actions/actionTypes';  
import { loginSaga, checkAuthSaga, logoutSaga } from './authSaga';   

export function* watchAuth() {
    yield takeEvery(actionTypes.LOGIN, loginSaga);
    yield takeEvery(actionTypes.CHECK_AUTH, checkAuthSaga);
    yield takeEvery(actionTypes.LOGOUT, logoutSaga);
}