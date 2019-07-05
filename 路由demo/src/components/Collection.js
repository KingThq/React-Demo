import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';

class Collection extends Component {
    constructor(props) {
        super(props);

        let isColl = false;
        let userColl = []; //个人收藏
        if(localStorage.userName) {
            userColl = this.getUserColl();
            isColl = userColl.find(v => v.id===this.props.id) ? true : false;
        }

        this.state = {
            isColl, //false:未收藏 true:已收藏
            userColl
        }
    }
    
    addCollection() {
        if(localStorage.userName) {
            this.state.userColl = this.getUserColl();
            if(this.state.isColl) {
                //取消收藏
                let index = this.state.userColl.findIndex(v => v.id===this.props.id);
                this.state.userColl.splice(index, 1);
            } else {
                //添加收藏
                let news = JSON.parse(localStorage.newsList).find(v => v.id===this.props.id);
                this.state.userColl.push(news);
            }
            //将用户收藏信息转换为JSON对象
            const userCollection = JSON.parse(localStorage.userCollection);
            //更新用户收藏集合
            userCollection[localStorage.userName] = this.state.userColl;
            localStorage.userCollection = JSON.stringify(userCollection);

            this.setState({
                isColl: !this.state.isColl
            }, () => {
                if(this.props.changeUserColl) {
                    this.props.changeUserColl();
                }
            })
        } else {
            this.props.history.push('/login');
        }
    }

    getUserColl() {
        return JSON.parse(localStorage.userCollection)[localStorage.userName];
    }

    render() {
        return (
            <input type="button" style={{marginLeft:'10px'}}
                onClick={this.addCollection.bind(this)}
                value={this.state.isColl?"取消收藏":"收藏"}/>
        )
    }
}

export default withRouter(Collection);