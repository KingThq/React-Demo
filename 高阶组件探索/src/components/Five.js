// 加载中

import React from "react";
import {wrapperFive} from "wrapper"
class Five extends React.Component{
    render(){
        return (
            // 获取localStorage当中的某个属性值
            <div>
                {this.props.propsName}:{localStorage[this.props.propsName]}
            </div>
        )
    }
}
export default wrapperFive("userName")(Five)



