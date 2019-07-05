import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class AddCar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            userCar: JSON.parse(localStorage.userCarList)[localStorage.userName]
        }
    }
    
    addCar() {
        if(localStorage.userName) {
            this.setState({
                userCar: JSON.parse(localStorage.userCarList)[localStorage.userName]
            }, () => {
                let carGood = this.state.userCar.find(v => v.goodsId===this.props.id);
                
                if(carGood) {
                    //已添加购物车
                    let carGoodIndex = this.state.userCar.findIndex(v => v.goodsId===this.props.id);
                    this.state.userCar[carGoodIndex].buyNum += 1;
                } else {
                    //未添加购物车
                    let goods = JSON.parse(localStorage.goodsList).find(v => v.goodsId===this.props.id);
                    goods.buyNum = 1;
                    this.state.userCar.push(goods);
                }
                const userCarList = JSON.parse(localStorage.userCarList);
                userCarList[localStorage.userName] = this.state.userCar;
                localStorage.userCarList = JSON.stringify(userCarList);
            })
            
        } else {
            // this.props.history.push('/login');
            alert("您还没有登录，无法购买!");
        }
    }

    render() {
        return (
            <input type="button"
                onClick={this.addCar.bind(this)}
                value="加入购物车"/>
        )
    }
}

export default withRouter(AddCar);