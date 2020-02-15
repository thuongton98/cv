import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'


export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div className="container">
        <Link className="navbar-brand" to="/">ThuongTon</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="chon" to="/home">Home</NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="chon" to="/project">My Project</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName="chon" to="/contact">Contact</NavLink>
            </li>
          </ul>
          
        </div>
        </div>
      </nav>
        )
    }
}
