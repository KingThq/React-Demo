import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App userName={"abc"} age={12} />, 
//         document.getElementById('root'));

// 语法糖
// ReactDOM.render(<App {...{userName:"abcdefg",age:34,sex:"男"}} />, 
//         document.getElementById('root'));

// ReactDOM.render(<App {...{
//     ...{
//         userName:"xixi",
//         age:45
//     },
//     ...{
//         sex:"女"
//     }
// }} />, document.getElementById('root'));

// const baseInfo = {
//     userName:"xixi",
//     age:45
// }
// const sexInfo = {
//     sex:"女"
// }
// ReactDOM.render(<App {...{
//     ...baseInfo,
//     ...sexInfo
// }} />, document.getElementById('root'));



const baseInfo = {
    userName:"xixi",
    age:45
}
const sexInfo = {
    sex:"女"
}
Object.assign(baseInfo,sexInfo)
ReactDOM.render(<App {...baseInfo} />, document.getElementById('root'));




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
