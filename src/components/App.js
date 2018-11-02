import React, { Component } from 'react';

import { BrowserRouter, Route } from 'react-router-dom';

import Header from './common/Header';
import HomePage from "./Homepage";


class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className='gr1d99'>
                <Header/>
                <div className='content'>
                    <Route path='/' exact component={HomePage}/>
                </div>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
