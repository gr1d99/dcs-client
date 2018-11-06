import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from './common/Header';
import HomePage from './Homepage';
import Login from '../containers/auth/Login';
import Alert from "./common/Alert";

class App extends Component {
    constructor(props, context){
        super(props);
        this.renderAlerts = this.renderAlerts.bind(this);
    }

    renderAlerts = () => {
        const { type, message } = this.props.notification;
        if (type && message){
            return <Alert type={type} message={message}/>
        }
    };

    render() {
        return (
            <BrowserRouter>
                <div className='gr1d99'>
                    <Header
                        auth={this.props.auth}
                    />
                    <div className='container-fluid content mt-4'>
                        {this.renderAlerts()}
                        <Route path='/' exact component={HomePage}/>
                        <Route path='/login' component={Login}/>
                    </div>
                </div>
            </BrowserRouter>
        );
      }
}

const mapStateToProps = ({auth, notification}) => {
    return {auth, notification}
};

export default connect(mapStateToProps, null)(App);
