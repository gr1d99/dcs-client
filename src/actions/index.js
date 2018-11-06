import * as types from './../constants/ActionTypes';

export const loginSuccess = (jwt_token) => {
    return {
        type: types.LOGIN_SUCCESS,
        jwt_token: jwt_token
    }
};

export const loginError = (message) => {
    return {
        type: types.WARNING_NOTIFICATION,
        notification_type: 'warning',
        notification_message: message
    }
};
