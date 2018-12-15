import axios from 'axios';
import {LOGIN_ENDPOINT} from './endpoints';

import {
    loginSuccess,
    loginError
} from '../actions';

const env = process.env;
const URL = `${env.REACT_APP_API_BASE_URL}${env.REACT_APP_API_VERSION}${LOGIN_ENDPOINT}`;

export const loginUser = (email, password) => {
    const request = axios.post(URL, {
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
