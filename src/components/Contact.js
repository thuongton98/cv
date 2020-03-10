import React, { Component } from 'react'
import axios from 'axios';
const Redirect = require("react-router-dom").Redirect;

export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      isRedirect: false,
      name:'',
      email: '',
      title:'',
      comment:'',
      
    }
  }
  onChangeName(e) {
    this.setState({
      name: e.target.value
    })
  }
  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    })
  }
  onChangeTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  onChangeComment(e) {
    this.setState({
      comment: e.target.value
    })
  }
  onSubmit(e) {
    e.preventDefault();
    
    const contact = {
      name: this.state.name,
      email: this.state.email,
      title: this.state.title,
      comment: this.state.comment
    }

    console.log(contact);
    
    axios.post('https://thuong-cv.herokuapp.com/contact/add', contact)
      .then(res => console.log(res.data));
    
    this.setState({
      name:'',
      email: '',
      title:'',
      comment:'',
      isRedirect:true
    })
  }
    render() {
      if (this.state.isRedirect === true){
      
        return <Redirect to="/home"/>
      }
        return (
            <div className="container ">
                 <div className="jumbotron text-center top-pa">
        <h1 className="display-4 text-center">This Is Thuong'Contact!!!</h1>
        
      </div>
      <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input onChange={this.onChangeName} value={this.state.name} type="name" className="form-control" placeholder="Your Name" />
                </div>
                <div className="form-group">
                <input onChange={this.onChangeEmail} value={this.state.email} type="email" className="form-control" placeholder="Your Email" />
                </div>
              <div className="form-group">
                <input onChange={this.onChangeTitle} value={this.state.title} type="text" className="form-control" placeholder="Your Title" />
              </div>
              <div className="form-group">
                <textarea onChange={this.onChangeComment} value={this.state.comment} className="form-control" rows={6} placeholder="Your Comment" />
              </div>
              <div className="form-group">
            <input className="btn btn-primary" type="submit" value="Submit"  />
          </div>
            </form>
            </div>
        )
    }
}
