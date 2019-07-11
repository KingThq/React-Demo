import React from "react";
import {wrapperFour} from "./wrapper"
class Four extends React.Component{
    constructor(){
        super();
        this.state = {
            wuxia:[
                {
                    bookName:"射雕英雄传"
                },
                {
                    bookName:"神雕侠侣"
                }
            ],
            yanqing:[
                {
                    bookName:"老房子"
                },
                {
                    bookName:"情深深雨蒙蒙"
                }
            ]
        }
    }
    render(){
        return (
            <div>
                <h3>{this.props.bookTypeName}</h3>
                {
                    this.state[this.props.bookType].map((v,i)=>{
                        return (
                            <div key={i}>{v.bookName}</div>
                        )
                    })
                }
            </div>
        )
    }
}
export default wrapperFour(Four);
