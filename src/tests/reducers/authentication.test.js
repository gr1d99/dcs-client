import authenticationReducer  from '../../reducers/authentication';
import { LOGIN_SUCCESS } from './../../constants/ActionTypes';

describe('authentication reducer', () => {
    it('should return the initial state', () => {
        const initialState = { logged_in: false, jwt_token: '' };
        expect(authenticationReducer(undefined, {})).toEqual(initialState)
    });

    it('should handle LOGIN_SUCCESS action type', () => {
        const jwt_token = 'some-jwt-token';
        const expectedState = { logged_in: true, jwt_token: jwt_token };
        const action = { type: LOGIN_SUCCESS, jwt_token: jwt_token };
        expect(authenticationReducer(undefined, action)).toEqual(expectedState)
    });
});
