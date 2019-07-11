import React from "react"
import {wrapperThree} from "./wrapper"
import MyCom from "./MyCom";
class Three extends React.Component{
    render(){
        return (
            <div>two{this.props.userName}</div>
        )
    }
}

export default wrapperThree("女")(Three);


// export default wrapperThree(Three,"未知");