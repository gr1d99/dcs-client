import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../../actions/index';
import * as types from '../../constants/ActionTypes';
import { loginUser } from '../../api/authentication';
import expect from 'expect';
import mockAxios from 'axios';
import jwt_token from "../../utils/jwt_token";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('async actions', () => {
    it('creates LOGIN_SUCCESS action when user is successfully authenticated', () => {
        const store = mockStore({logged_in: false});
        const email = 'test@example.com';
        const password = 'testuserpassword';
        const jwt_token = 'some-test-jwt-token';
        const expectedAction = [{type: types.LOGIN_SUCCESS, jwt_token: jwt_token}];

        mockAxios.post.mockImplementationOnce(() =>
            Promise.resolve({
                data: {jwt_token: jwt_token}
            })
        );

        store.dispatch(loginUser(email, password)).then(response => {
            expect(store.getActions()).toEqual(expectedAction);
        })

    });

    it('should dispatch LOGIN_ERROR when authentication fails', () => {
        const store = mockStore({logged_in: false});
        const email = 'test@example.com';
        const password = 'testuserpassword';
        const error_message = 'Incorrect email or password';
        const expectedAction = [{
            type: types.WARNING_NOTIFICATION,
            kind: 'warning',
            message: 'Incorrect email or password'
        }];

        mockAxios.post.mockImplementationOnce(() =>
            Promise.reject({
                response: {
                    data: {error: error_message}
                }
            })
        );
        store.dispatch(loginUser(email, password)).then(()=> {
            expect(store.getActions()).toEqual(expectedAction)
        })
    })
});
