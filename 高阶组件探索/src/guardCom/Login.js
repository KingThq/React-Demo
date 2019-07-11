import React from "react";
import {
    withRouter
} from "react-router-dom"
// import {
//     connect
// } from "react-redux"
class Login extends React.Component{
    render(){
        return (
            <div>
                <input type="text" ref={"userName"} onKeyUp={this.sendForm.bind(this)}/>
            </div>
        )
    }
    sendForm(e){
        if(e.keyCode === 13){
            if(this.refs.userName.value === "admin"){
                localStorage.userName = "admin";
                this.props.history.push("/");

            }else{
                alert("账号密码错误")
            }
        }

    }
}
export default withRouter(Login);
// export default withRouter(connect(null,null)(Login));