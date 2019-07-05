import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    NavLink
} from 'react-router-dom';
import Collection from '../components/Collection';
import Detail from '../views/Detail';

export default class MyColl extends Component {
    constructor() {
        super();

        this.state = {
            userColl: JSON.parse(localStorage.userCollection)[localStorage.userName]
        }
    }

    changeUserColl() {
        this.setState({
            userColl: JSON.parse(localStorage.userCollection)[localStorage.userName]
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.userColl.map(v => {
                        return (
                            <div key={v.id}>
                                <Router forceRefresh>
                                    <NavLink to={'/detail/'+v.id}>{v.title}</NavLink>
                                    <Collection id={v.id} changeUserColl={this.changeUserColl.bind(this)}></Collection>

                                    <Route path='/detail/:id' component={Detail}/>
                                </Router>
                            </div>
                        )
                    })
                }
            </div>
        )
    }
}
