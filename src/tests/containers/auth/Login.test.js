import React from 'react'

import {render, shallow} from 'enzyme'

import configureStore from 'redux-mock-store'

import {Login} from './../../../containers/auth/Login'

import './../../jestsetup'


describe('Login component', () => {
    let wrapper
    let initialState
    let loginUserFn = jest.fn()

    beforeEach(() => {
        initialState = {logged_in: false}
        wrapper = shallow(<Login
            logged_in={false}
            loginUser={loginUserFn}/>)
    })

    afterEach(() => {
        loginUserFn.mockClear()
    })

    it('should render component when user is not authenticated', () => {
        expect(wrapper.find('input').length).toEqual(3)
    });

    it('should have email and password in initial state', function () {
        expect(wrapper.state()).toMatchObject({email: '', password: ''})
    });

    it('should call loginUser function', () => {
        wrapper.find('#login-form').simulate('submit', {preventDefault() {}})
        expect(loginUserFn.mock.calls.length).toBe(1)
    })

    it('should call handleEmailOnChange', () => {
        const email = 'test@email.com'
        wrapper.instance().handleEmailOnChange({target: {name: 'email', value: email}})
        wrapper.update()
        expect(wrapper.state().email).toBe(email)
    });

    it('should call handlePasswordOnChange', () => {
        const password = 'test1234'
        wrapper.instance().handlePasswordOnChange({target: {name: 'password', value: password}})
        wrapper.update()
        expect(wrapper.state().password).toBe(password)
    });

    it('should call updateStateValue', () => {
        const {name, value} = {name: 'email', value: 'test@email.com'}
        wrapper.instance().updateStateValue(name, value)
        wrapper.update()
        expect(wrapper.state().email).toBe(value)
    });



    it('should call loginUser function with correct arguments', () => {
        const { email, password} = { email: 'test@email.com', password: 'test1234'}
        wrapper.find('#id_email').simulate('change', {target: {name: 'email', value: email}})
        wrapper.find('#id_password').simulate('change', {target: {name: 'password', value: password}})
        wrapper.find('#login-form').simulate('submit', {preventDefault() {}})
        expect(loginUserFn).toBeCalled()
        expect(loginUserFn).toHaveBeenCalledTimes(1)
        expect(loginUserFn).toHaveBeenCalledWith(email, password)
    });
});
