import * as actions from './../actions';
import * as types from './../constants/ActionTypes';

describe('loginSuccess', () => {
    it('should create an action to authenticate user', function () {
        const expectedAction = {type: types.LOGIN_SUCCESS};
        expect(actions.loginSuccess()).toEqual(expectedAction)
    });
});

describe('loginError', () => {
    it('should dispatch an action containing error message', () => {
        const error_message = 'Incorrect email or password';
        const expectedAction = {
            type: types.WARNING_NOTIFICATION,
            message: error_message,
            kind: 'warning'};

        expect(actions.loginError(error_message)).toEqual(expectedAction)
    })
});
