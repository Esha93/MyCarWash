import * as actionTypes from './actionTypes';

export const login = (email, password) => {
    return {
        type: actionTypes.LOGIN,
        email: email,
        password: password
    }
}

export const loginSuccess = (userId, isAuthenticated) => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        userId: userId,
        isAuthenticated: isAuthenticated
    }
} 

export const checkAuth = () => {
    return {
        type: actionTypes.CHECK_AUTH
    }
}

export const logout = () => {
    return {
        type: actionTypes.LOGOUT
    }
}

export const logoutSuccess = () => {
    return {
        type: actionTypes.LOGOUT_SUCCESS,
        userId: null,
        isAuthenticated: false
    }
}

export const googleLogin = (userId) => {
    return {
        type: actionTypes.GOOGLE_LOGIN,
        userId: userId,
        isAuthenticated: true
    }

}