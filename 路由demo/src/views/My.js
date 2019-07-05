import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import MyColl from '../components/MyColl';
import MyGoods from '../components/MyGoods';

export default class My extends Component {
    componentWillMount() {
        if(!localStorage.userName)
            this.props.history.push('/login');
        else 
            this.props.history.push('/my');
    }

    render() {
        return (
            <div style={{margin:'10px'}}>
                欢迎 {localStorage.userName} 登录~
                <input style={{marginLeft:'10px'}} 
                    onClick={() => {
                        localStorage.removeItem('userName');
                        this.props.history.push('/login');
                    }}
                    type="button"
                    value="退出"
                />
                <br/>

                <Router>
                    <NavLink style={{margin:'20px',color:'green'}} 
                        activeStyle={{color:'red'}}
                        exact
                        to={'/my/'}>
                        我的收藏
                    </NavLink>
                    <NavLink style={{margin:'20px',color:'green'}} 
                        activeStyle={{color:'red'}}
                        to={'/my/goods'}>
                        我的购物车
                    </NavLink>
                    
                    <Route path='/my/' exact component={MyColl}/>
                    <Route path='/my/goods' component={MyGoods}/>
                </Router>
            </div>
        )
    }
}
