import React from 'react';
import logo from './logo.svg';
// import MyCom from "./components/MyCom"
// import One from "./components/One"
// import Two from "./components/Two"
// import Three from "./components/Three"
// import Four from "./components/Four"
// import Six from "./components/Six"

import Home from "./guardCom/Home";
import One from "./guardCom/One";
import Login from "./guardCom/Login";
import GuardRouter from "./guardCom/GuardRouter"
import GuardRouterTwo from "./guardCom/GuardRouterTwo"
import GuardNav from "./guardCom/GuardNav"



import {
    BrowserRouter as Router,
    Route,
    NavLink
} from "react-router-dom"
import './App.css';
import router from "./router"
/*******************************guard*************************************************/
class App extends React.Component{
    constructor(){
        super();
        this.state={
            router
        }
    }
    addRouter(){
        this.setState({
            router:this.state.router.push({
                path:"/lala",
                exact:true,
                component:Home,
                nameStr:"首页12121212",
                isAuthorization:true
            })
        })
    }
    render(){
        return (
            <div className="App">
                <Router>
                    <GuardNav></GuardNav>
                    {
                        router.map((v,i)=>{
                            return (
                                <Route  key={i} path={v.path} exact={v.exact} 
                                    render={()=><GuardRouterTwo {...v}></GuardRouterTwo>}>
                                </Route>
                            )
                        })
                    }
                </Router>







                {/*<Router>*/}
                {/*<NavLink exact activeStyle={{color:"red"}} to={"/"}>首页</NavLink>|*/}
                {/*<NavLink activeStyle={{color:"red"}} to={"/one"}>One</NavLink>|*/}
                {/*<NavLink activeStyle={{color:"red"}} to={"/login"}>登陆</NavLink>*/}

                {/*{*/}
                {/*router.map((v,i)=>{*/}
                {/*return (*/}
                {/*<Route key={i} {...v}></Route>*/}
                {/*)*/}
                {/*})*/}
                {/*}*/}

                {/*</Router>*/}
            </div>
        )
    }
}
export default App;
/*******************************guard*************************************************/
// class App extends React.Component{
//     render(){
//         return (
//             <div className="App">
//
//                 <Router>
//                     <NavLink exact activeStyle={{color:"red"}} to={"/"}>首页</NavLink>|
//                     <NavLink activeStyle={{color:"red"}} to={"/one"}>One</NavLink>|
//                     <NavLink activeStyle={{color:"red"}} to={"/login"}>登陆</NavLink>
//
//
//                     {/*<Route path={"/"} exact={true} render={()=><div>首页</div>}></Route>*/}
//
//                     {
//                         router.map((v,i)=>{
//                             return (
//                                 <Route  key={i} path={v.path} exact={v.exact} render={()=><GuardRouterTwo {...v}></GuardRouterTwo>}></Route>
//                             )
//                         })
//                     }
//
//                 </Router>
//
//
//
//
//
//
//
//                 {/*<Router>*/}
//                     {/*<NavLink exact activeStyle={{color:"red"}} to={"/"}>首页</NavLink>|*/}
//                     {/*<NavLink activeStyle={{color:"red"}} to={"/one"}>One</NavLink>|*/}
//                     {/*<NavLink activeStyle={{color:"red"}} to={"/login"}>登陆</NavLink>*/}
//
//                     {/*{*/}
//                         {/*router.map((v,i)=>{*/}
//                             {/*return (*/}
//                                 {/*<Route key={i} {...v}></Route>*/}
//                             {/*)*/}
//                         {/*})*/}
//                     {/*}*/}
//
//                 {/*</Router>*/}
//             </div>
//         )
//     }
// }
// export default App;





/*******************************guard*************************************************/
// class App extends React.Component{
//     render(){
//         return (
//             <div className="App">
//                 <Router>
//                     <NavLink exact activeStyle={{color:"red"}} to={"/"}>首页</NavLink>|
//                     <NavLink activeStyle={{color:"red"}} to={"/one"}>One</NavLink>|
//                     <NavLink activeStyle={{color:"red"}} to={"/login"}>登陆</NavLink>
//
//                     <Route exact={true} path={"/"} component={Home}></Route>
//                     {/*<Route exact path={"/"} render={()=><div>render</div>}></Route>*/}
//                     <Route path={"/one"} component={One}></Route>
//                     <Route path={"/login"} component={Login}></Route>
//                 </Router>
//             </div>
//         )
//     }
// }
// export default App;










/*******************************one*************************************************/
// function App(props) {
//     console.log(props);
//     return (
//         <div className="App">
//             <Six></Six>
//             {/*<Four bookType={"wuxia"}></Four>*/}
//             {/*<Four bookType={"yanqing"}></Four>*/}
//             {/*<Three userName={"laoliu"}></Three>*/}
//             {/*<Two userName={"laoliu"}></Two>*/}
//             {/*<One userName={"laoli"}></One>*/}
//         </div>
//     );
// }
//
// export default App;








// function App(props) {
//   console.log(props);
//   return (
//     <div className="App">
//         <MyCom {...props}></MyCom>
//     </div>
//   );
// }
//
// export default App;
