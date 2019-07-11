import React from "react";
import GuadRouter from "./GuardRouter"
class One extends React.Component{
    componentWillMount(){
        console.log(222222);
        // if(!localStorage.userName)
        //     this.props.history.push("/login");
    }
    render(){
        return (
            <div>
                {/*<GuadRouter  {...this.props}></GuadRouter>*/}
                One</div>
        )
    }
}
export default One;