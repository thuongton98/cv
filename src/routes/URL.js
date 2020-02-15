import React, { Component } from 'react'
import { Route } from "react-router-dom";
import Home from './../components/Home'
import Project from './../components/Project'
import Contact from './../components/Contact'
import Mess from './../components/Mess'
import Edit from './../components/Edit'

export default class URL extends Component {
    render() {
        return (
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/edit/:id" component={Edit}/>
                <Route exact path="/mess" component={Mess}/>
                <Route exact path="/home" component={Home}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/project" component={Project}/>
            </div>
        )
    }
}
