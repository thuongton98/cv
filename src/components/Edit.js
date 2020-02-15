import React, { Component } from 'react';
import axios from 'axios';


class edit extends Component {
    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeComment = this.onChangeComment.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
        
        name:'',
        email: '',
        title:'',
        comment:'',
        }
      }
    
      componentDidMount() {
        axios.get('https://thuong-cv.herokuapp.com/contact/'+this.props.match.params.id)
          .then(response => {
            
           this.setState({
                name: response.data.name,
                email: response.data.email,
                title: response.data.title,
                comment: response.data.comment
              })
          })
          .catch(function (error) {
            console.log(error);
          })
    
        
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
      
    
    
    
          axios.post('https://thuong-cv.herokuapp.com/contact/update/' + this.props.match.params.id, contact)
          .then(res => console.log(res.data));
    
        window.location = '/mess';
      }
    
      render() {
        return (
            <div className="container ">
            <div className="jumbotron text-center " style={{paddingTop: '100px'}}>
   <h1 className="display-4">Edit Contact!!!</h1>
   
 </div>
 <form onSubmit={this.onSubmit}>
         <div className="form-group">
           <input value={this.state.name} onChange={this.onChangeName} type="name" className="form-control" placeholder="Your Name" />
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

export default edit;
