import React from "react";
import "./App.css";
import {
	BrowserRouter as Router,
	Route,
	NavLink,
	Switch
} from 'react-router-dom';
import News from "./views/News";
import Goods from "./views/Goods";
import My from "./views/My";
import Login from "./views/Login";
import Detail from "./views/Detail";

function App() {
	//用户列表
	if(!localStorage.userList)
		localStorage.userList = JSON.stringify(["zhangsan", "lisi", "wangwu", "zhaoliu"]);
	//新闻列表
	if(!localStorage.newsList)
		localStorage.newsList = JSON.stringify([
			{
                id: Date.now(),
                title: "奚梦瑶晒与何猷君结婚证件照：这个人真有眼光",
                context: "4日，奚梦瑶晒出与何猷君合拍的证件照，并配文：“右边这个人真有眼光”，领证结婚。随后，何猷君也在微博晒出两人的结婚证件照，并配文：“左边这个人才有眼光。”证件照中，两人十指紧扣，默契比心，恩爱非常。"
            }, {
                id: Date.now() - 988765578,
                title: "言承旭菜市场拍片引围观 工作人员喊“滚”惹争议",
                context: "据悉，言承旭现身成都三圣乡喜树街的菜市场，由于菜市场民众本来就多，大明星突然出现，让所有买菜中的太太、阿姨全都停下脚步。他依旧留着胡渣，穿黑色T恤和长裤，180公分的高挑身材在人群中相当显眼，同时女星任素汐也现身，据悉，众人是为了拍摄电影《相亲大作战》，拍摄中他开心比“耶”手势，还为买菜中的阿姨按摩，表情相当轻松。"
            }, {
                id: Date.now() - 98729587987,
                title: "北京朝阳警方：向李彦宏泼水者被行拘5日",
                context: "新京报快讯  据平安朝阳消息，2019年7月3日11时许，朝阳分局奥园派出所接到百度公司工作人员报警称，一男子扰乱其公司活动现场秩序。警方接到报警后，依法开展调查，目前已对嫌疑人程某某寻衅滋事的行为处以行政拘留5日的处罚"
            }
		]);
	//用户收藏列表
	if(!localStorage.userCollection) {
		const userList = JSON.parse(localStorage.userList);
		const userCollection = {};
		userList.forEach(v => {
			userCollection[v] = [];
		});
		localStorage.userCollection = JSON.stringify(userCollection);
	}
	//商品列表
	if(!localStorage.goodsList) {
		localStorage.goodsList = JSON.stringify([
			{
				goodsId: Date.now(),
				goodsName: '面包',
				goodsPrice: '￥5',
				goodsType: 'foods'
			},
			{
				goodsId: Date.now()-46587452,
				goodsName: '汉堡',
				goodsPrice: '￥10',
				goodsType: 'foods'
			},
			{
				goodsId: Date.now()-12345,
				goodsName: '脉动',
				goodsPrice: '￥4',
				goodsType: 'drinks'
			},
			{
				goodsId: Date.now()-9876788,
				goodsName: '可乐',
				goodsPrice: '￥3',
				goodsType: 'drinks'
			},
			{
				goodsId: Date.now()-5444266,
				goodsName: '雪碧',
				goodsPrice: '￥3',
				goodsType: 'drinks'
			}
		])
	}
	//用户购物车列表
	if(!localStorage.userCarList) {
		const userList = JSON.parse(localStorage.userList);
		const userCarList = {};
		userList.forEach(v => {
			userCarList[v] = [];
		})
		localStorage.userCarList = JSON.stringify(userCarList);
	}

  return (
    <div className="App">
		<Router>
			<NavLink to={'/'} style={{margin:'40px'}} exact activeStyle={{color:'red'}}>新闻</NavLink>
			<NavLink to={'/goods'} style={{margin:'40px'}} activeStyle={{color:'red'}}>商品</NavLink>
			<NavLink to={'/my'} style={{margin:'40px'}} activeStyle={{color:'red'}}>我的</NavLink>

			<Switch>
				<Route path='/' exact component={News}/>
				<Route path='/goods' component={Goods}/>
				<Route path='/my' component={My}/>
				<Route path='/login' component={Login}/>
				<Route path='/detail/:id' component={Detail}/>

				<Route path='*' component={() => <div>404,您访问的页面不存在</div>}/>		
			</Switch>
			
		</Router>
    </div>
  );
}

export default App;
