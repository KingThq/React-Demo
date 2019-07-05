import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: ''
        }
    }
    
    componentWillMount() {
        if(localStorage.userName) 
            this.props.history.push('/');    
    }

    login(e) {
        if(e.keyCode === 13) {
            const userList = JSON.parse(localStorage.userList);
            if(userList.includes(this.state.userName.value)) {
                localStorage.userName = this.state.userName.value;
                this.props.history.push('/My');
            } else {
                alert('用户名不存在！');
            }
        }
    }

    render() {
        return (
            <div>
                <input type="text" 
                    style={{
                        margin:'10px',
                        paddingLeft: '4px',
                        width: '180px',
                        height:'20px'
                    }} 
                    ref={v => this.state.userName=v}
                    onKeyUp={this.login.bind(this)}
                    placeholder="请输入用户名"/>
            </div>
        )
    }
}
