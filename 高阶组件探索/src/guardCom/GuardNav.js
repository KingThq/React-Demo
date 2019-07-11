import React from "react";
import router from "../router"
import {
    NavLink
} from "react-router-dom"
export default class GuardNav extends React.Component{
    render(){
        return (
            router.map((v,i)=>{
                return (
                    <NavLink exact={v.exact} activeStyle={{color:"red"}} to={v.path}>{v.nameStr}</NavLink>
                )
            })
        )
    }
}