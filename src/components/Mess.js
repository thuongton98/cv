import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'


const Contact = props => (
    <tr>
      <td>{props.contacts.name}</td>
      <td>{props.contacts.email}</td>
      <td>{props.contacts.title}</td>
      <td>{props.contacts.comment}</td>
      <td>
      <Link to={"/edit/"+props.contacts._id}>edit</Link> | <a href="/" onClick={() => { props.deleteContact(props.contacts._id) }}>delete</a>
      </td>
    </tr>
  )
export default class Mess extends Component {
    constructor(props) {
        super(props);
    
        this.deleteContact = this.deleteContact.bind(this)
    
        this.state = {contacts: []};
      }
      //delete mac dinh
      deleteContact(id) {
        axios.delete('https://thuong-cv.herokuapp.com/contact'+id)
          .then(response => { console.log(response.data)});
    
        this.setState({
          contacts: this.state.contacts.filter(el => el._id !== id)
        })
      }
      //lay du lieu
      componentDidMount() {
        axios.get('https://thuong-cv.herokuapp.com/contact')
          .then(response => {
            this.setState({ contacts: response.data })
          })
          .catch((error) => {
            console.log(error);
          })
      }//dua vo ham khai bao tren de xuat ra
      contactList() {
        return this.state.contacts.map(currentcontact => {
          return <Contact contacts={currentcontact} deletecontact={this.deletecontact} key={currentcontact._id}/>;
        })
      }
    render() {
        return (
            <div style={{paddingTop: '100px'}}>
        <h3>LIST Mess:</h3>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Title</th>
              <th>Comment</th>
            </tr>
          </thead>
          <tbody>
          { this.contactList() }
          </tbody>
        </table>
      </div>
        )
    }
}
