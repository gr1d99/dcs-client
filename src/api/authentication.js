import axios from 'axios';

import {
    loginSuccess,
    loginError
} from "../actions";

const AUTH_URL = 'http://localhost:3000/auth/login';

export const loginUser = (email, password) => {
    const request = axios.post(AUTH_URL, {
        email: email,
        password: password
    });
    return dispatch => {
        return request
            .then(function (response) {
                dispatch(loginSuccess(response.data.jwt_token))
            }).catch(function (error) {
                dispatch(loginError(error.response.data.error))
            })
    }
};
