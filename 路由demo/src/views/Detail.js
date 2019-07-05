import React, {Component} from 'react';
import Collection from '../components/Collection';

export default class Detail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsInfo: JSON.parse(localStorage.newsList).find(v => v.id===this.props.match.params.id/1)
        }
    }
    
    render() {
        return (
            <div>
                <input type="button" 
                    onClick={() => {
                        this.props.history.go(-1);
                    }}
                    value="返回"/>
                <h3>{this.state.newsInfo.title}</h3>
                <Collection id={this.state.newsInfo.id}></Collection>
                <p style={{width:'600px',margin:'0 auto'}}>{this.state.newsInfo.context}</p>
            </div>
        )
    }
}