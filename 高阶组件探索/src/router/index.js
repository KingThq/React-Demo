import Home from "../guardCom/Home";
import One from "../guardCom/One";
import Login from "../guardCom/Login";
export default [
    {
        path:"/",
        exact:true,
        component:Home,
        nameStr:"首页",
        isAuthorization:true
    },
    {
        path:"/one",
        exact:false,
        component:One,
        nameStr:"ONE",
        isAuthorization:true
    },
    {
        path:"/login",
        exact:false,
        nameStr:"登陆",
        component:Login
    }
]