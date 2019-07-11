// 普通的状态组件
import React from "react";

// 高阶组件
// function wrapper(MyCom){
//     return MyCom;
// }
function wrapper(MyCom) {
     class WarpCom extends React.Component{
         constructor(){
             super();
         }
         render(){
             const props = {
                 ...this.props,
                 ...{
                     hobby:"学习"
                 }
             }
             return (
                 <div>
                     我是一个高阶组件：
                     <MyCom {...props}></MyCom>
                 </div>
             )
         }
         componentWillMount(){
             console.log(this.props);
         }
     }
     return WarpCom;
}

class One extends React.Component{
    render(){
        return (
            <div>
                名字：{this.props.userName}
                爱好：{this.props.hobby}
            </div>
        )
    }
    componentWillMount(){
        console.log(33333,this.props)
    }
}
export default wrapper(One);