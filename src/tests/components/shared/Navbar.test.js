import jsonwebtoken from 'jsonwebtoken'

import React from 'react'
import {mount} from 'enzyme'

import { BrowserRouter } from 'react-router-dom'

import Navbar from './../../../components/shared/Navbar'

import './../../jestsetup'


describe('Navabar component', () => {
    it('should render unprotected links when user is not authenticated', () => {
        const props = {
            logged_in: false,
            jwt_token: ''}

        const wrapper = mount(
            <BrowserRouter>
                <Navbar auth={props}/>
            </BrowserRouter>)

        expect(wrapper.containsMatchingElement(<a className='navbar-brand' href='/'>DCS</a>)).toBeTruthy()
        expect(wrapper.containsMatchingElement(<a className='nav-link' href='/login'>Login</a>)).toBeTruthy()
    });

    it('should render protected links when user is authenticated', () => {
        const email = 'test@email.com'
        const jwt_token = jsonwebtoken.sign({email: email}, 'secret')
        const props = {logged_in: true,
                       jwt_token: jwt_token}

        const wrapper = mount(
            <BrowserRouter>
                <Navbar auth={props}/>
            </BrowserRouter>)

        expect(wrapper.containsMatchingElement(<a className='nav-link' href='/login'>Login</a>)).toBeFalsy()
        expect(wrapper.containsMatchingElement(<a className='navbar-brand' href='/'>DCS</a>)).toBeTruthy()
        expect(wrapper.containsMatchingElement(<a className='nav-link' href='/'>{email}</a>)).toBeTruthy()

    });
});
