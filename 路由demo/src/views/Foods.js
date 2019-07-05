import React, { Component } from 'react';
import AddCar from '../components/AddCar';

export default class Foods extends Component {
    constructor(props) {
        super(props);
        this.state = {
            foodsList: JSON.parse(localStorage.goodsList).filter(v => v.goodsType==='foods')
        }
    }
    
    render() {
        return (
            <div>
                {
                    this.state.foodsList.map((v, i) => {
                        return (
                            <div key={i} style={{margin:'15px'}}>
                                <span style={{paddingRight:'20px'}}>{v.goodsName}</span>
                                <span style={{paddingRight:'16px'}}>{v.goodsPrice}</span>

                                <AddCar id={v.goodsId}></AddCar>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
