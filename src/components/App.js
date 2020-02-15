import React, { Component } from 'react'
import './../css/App.css'
import './../css/styles.css'
import {
  BrowserRouter as Router, 
} from "react-router-dom";
import URL from './../routes/URL'
import Nav from './../components/Nav'
import Footer from './../components/Footer'


export default class App extends Component {
  render() {
    return (
      <Router>
        <Nav/>
        <URL/>
        <Footer/>
      </Router>
    )
  }
}
