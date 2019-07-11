import React from "react"
export default class MyCom extends React.Component{
    // 如果你只是想将属性作为 初始值的话，可以将属性的值赋值给状态
    constructor(props){
        super(props);
        this.state={
            userName:this.props.userName
        }
    }
    render(){
        return (
            <div>
                <input type="button" onClick={()=>{
                    this.setState({
                        userName:"haha"
                    })
                }}/>
                {this.state.userName}
            </div>
        )
    }
    componentWillMount(){
        console.log(2222,this.props);
    }
}