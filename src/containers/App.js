import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import Header from '../components/shared/Navbar';
import HomePage from '../components/Homepage';
import Login from './auth/Login';
import Alert from "../components/shared/Alert";

class App extends Component {
    constructor(props, context){
        super(props);
        this.renderAlerts = this.renderAlerts.bind(this);
    }

    renderAlerts = () => {
        const { kind, message } = this.props.notification;
        if (kind && message){
            return <Alert kind={kind} message={message}/>
        }
    };

    render() {
        return (
            <BrowserRouter>
                <div className='dcs'>
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
