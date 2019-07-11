import React from "react";
import {
    withRouter
} from "react-router-dom"

class GuardRouter extends React.Component{
    componentWillMount(){
        if(this.props.isAuthorization){
            if(!localStorage.userName)
                this.props.history.push("/login")
        }
    }
    render(){
        return (
            <this.props.component></this.props.component>
        )
    }
}
export default withRouter(GuardRouter);