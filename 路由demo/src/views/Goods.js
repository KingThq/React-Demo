import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import Foods from './Foods';
import Drinks from './Drinks';

export default class Goods extends Component {
    render() {
        return (
            <div>
                <Router>
                    <NavLink style={{margin:'30px'}} activeStyle={{color:'red'}} exact to={'/goods/'}>食物</NavLink>
                    <NavLink style={{margin:'30px'}} activeStyle={{color:'red'}} to={'/goods/drinks'}>饮料</NavLink>
                    
                    <Route path='/goods/' exact component={Foods}/>
                    <Route path='/goods/drinks' component={Drinks}/>
                </Router>
            </div>
        )
    }
}
