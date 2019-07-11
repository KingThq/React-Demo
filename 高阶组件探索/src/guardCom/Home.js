import React from "react";
import GuardRouter from './GuardRouter'
class Home extends React.Component{
    componentWillMount(){
        // console.log(111111,this.props);
        // if(!localStorage.userName)
        //     this.props.history.push("/login");
    }
    render(){
        return (
            <div>
                {/*<GuardRouter {...this.props}></GuardRouter>*/}
                首页
            </div>
        )
    }
}
export default Home;