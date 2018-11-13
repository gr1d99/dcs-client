import React from 'react';

import { Link, withRouter } from 'react-router-dom';

import jwt_decoder from './../../utils/jwt_token';

class Navbar extends React.Component {
    render() {
        let { logged_in, jwt_token } = this.props.auth;
        let current_user = jwt_decoder(jwt_token);
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDcs"
                        aria-controls="navbarTogglerDcs" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDcs">
                    <Link className="navbar-brand" to='/'>DCS</Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                        </li>
                    </ul>
                    { logged_in ? (
                        <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='#'>{current_user.email}</Link>
                            </li>
                        </ul>
                    ) : (
                        <ul className='navbar-nav ml-auto mt-2 mt-lg-0'>
                            <li className='nav-item'>
                                <Link className='nav-link' to='/login'>Login</Link>
                            </li>
                        </ul>
                    ) }
                </div>
            </nav>
        )
    }
}

export default withRouter(Navbar)
