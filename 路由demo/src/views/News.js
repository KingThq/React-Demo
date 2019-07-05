import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import Collection from '../components/Collection';

export default class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newsList: JSON.parse(localStorage.newsList)
        }
    }
    render() {
        return (
            <div>
                {
                    this.state.newsList.map(v => {
                        return (
                            <p key={v.id}>
                                <NavLink to={'/detail/'+v.id}>{v.title}</NavLink>
                                <Collection id={v.id}></Collection>
                            </p>
                        )
                    })
                }
            </div>
        )
    }
}
