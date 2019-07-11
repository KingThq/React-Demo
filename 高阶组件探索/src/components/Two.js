import React from "react"
import {wrapper,wrapperOne,wrapperTwo} from "./wrapper"
class Two extends React.Component{
    render(){
        return (
            <div>two{this.props.userName}{this.props.hobby}</div>
        )
    }
}
// 导出的是高阶组件的返回值。
// export default  wrapperOne(Two);
export default wrapperTwo(Two);