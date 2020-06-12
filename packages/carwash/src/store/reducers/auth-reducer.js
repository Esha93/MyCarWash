import * as actionTypes from '../actions/actionTypes';

const initialState = {
    isAuthenticated: false,
    userId: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.LOGIN_SUCCESS : 
            return {
                ...state, isAuthenticated: action.isAuthenticated, userId: action.userId
            }  
        case actionTypes.LOGOUT_SUCCESS: 
            return {
                ...state, isAuthenticated: action.isAuthenticated, userId: action.userId
            }      
        case actionTypes.GOOGLE_LOGIN:
            return {
                ...state, isAuthenticated: action.isAuthenticated, userId: action.userId
            }    
        default: return state;
    }
}

export default reducer;