import React from "react";
import loading from "./loading"




class Six extends React.Component{
    constructor(){
        super();
        this.state={
            isLoading:true,
            data:[]
        }
    }
    render(){
        return (
            <div>
                {this.state.data}
            </div>
        )
    }
    componentDidMount(){
        // ajax
        setTimeout(()=>{
            this.setState({
                isLoading:false,
                data:[1,2,3,4,5]
            })
        },2000)
    }
}
export default loading(Six);