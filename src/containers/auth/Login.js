import React from 'react';

import { Redirect } from 'react-router'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import { loginUser } from "../../api/authentication";

export class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = ({
            email: '',
            password: ''
        });
        this.updateStateValue = this.updateStateValue.bind(this);
        this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
        this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    updateStateValue = (name, value) => {
        let obj = {};
        obj[name] = value;
        this.setState(obj);
    };

    handleEmailOnChange = (event) => {
        this.updateStateValue('email', event.target.value)
    };

    handlePasswordOnChange = (event) => {
        this.updateStateValue('password', event.target.value)
    };

    handleOnSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.loginUser(email, password)
    };

    render() {
        if (this.props.logged_in) return <Redirect to='/' />;
        return (
            <div className='col-md-6 offset-md-3'>
                <form className='login-form border border-dark p-2' id='login-form' onSubmit={this.handleOnSubmit}>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input type='email'
                               id='id_email'
                               className='form-control'
                               placeholder='you@example.com'
                               onChange={this.handleEmailOnChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='password'>Password</label>
                        <input type='password'
                               id='id_password'
                               className='form-control'
                               onChange={this.handlePasswordOnChange}/>
                    </div>

                    <input type='submit'
                           className='btn btn-primary'
                           value='Login'/>
                </form>
            </div>
        )
    }
}

const mapStateToProps = ({auth}) => {
    return {
        logged_in: auth.logged_in
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginUser: bindActionCreators(loginUser, dispatch),
        dispatch
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
