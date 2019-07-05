import React, { Component } from 'react'

export default class MyGoods extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userCar: JSON.parse(localStorage.userCarList)[localStorage.userName]
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.userCar.map((v, i) => {
                        return (
                            <div key={i}>
                                <span style={{margin:'30px'}}>商品名称：{v.goodsName}</span>
                                <span style={{margin:'30px'}}>商品价格：{v.goodsPrice}</span>
                                <span style={{margin:'30px'}}>购买数量：{v.buyNum}</span>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
