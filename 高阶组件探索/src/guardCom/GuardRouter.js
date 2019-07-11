import React from "react";
import {
    Route,
    withRouter
} from "react-router-dom"

class GuardRouter extends React.Component{

    componentWillMount(){
        console.log(1212121212,this.props.isAuthorization)
        // if(this.props.isAuthorization){
            if(!localStorage.userName){
                console.log(111111);
                this.props.history.push("/login");
            }
        // }
    }
    render(){
        return false;
        // return (
        //    <Route {...this.props}></Route>
        // )
    }
}
export default withRouter(GuardRouter);