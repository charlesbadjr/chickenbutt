import React, { Component } from 'react';
import { Header, Segment, Form, Button, Menu } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { handleLogin } from '../reducers/user';
import { Link, withRouter } from 'react-router-dom'

class Contact extends Component {
  state = { first_Name: '', last_Name: '', company_Name: '', email: '', phone: '', message: '' };

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  }

  handleSubmit = event => {
    event.preventDefault();
    const { dispatch, history } = this.props;
    const { first_Name, last_Name, company_Name, email, phone, message } = this.state;
    dispatch(handleLogin({ first_Name, last_Name, company_Name, email, phone, message }, history));
  }

  render() {
    const { first_Name, last_Name, company_Name, email, phone, message } = this.state;
  
    return (
      <div className="Login_page">
      <Segment basic>
      <Header as="h1" style={{ color: 'white', textAlign: 'center' }}> Write Me: </Header>
        
        <Form className="Form_Layout" onSubmit={this.handleSubmit}>
          
          <Form.Field >
            <label htmlFor='Name' style={{color: "white"}} >First Name</label>
            <input 
              required
              id='first_Name'
              value={first_Name}
              placeholder='First Name'
              onChange={this.handleChange}
            />
          </Form.Field>
          
          <Form.Field >
            <label htmlFor='name' style={{color: "white"}} >Last Name</label>
            <input 
              required
              id='last_Name'
              value={last_Name}
              placeholder='last_Name'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='text' style={{color: "white"}} >Company Name</label>
            <input 
            
              id='company_Name'
              value={company_Name}
              placeholder='Company'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='email' style={{color: "white"}} >Email</label>
            <input 
              required
              id='email'
              value={email}
              placeholder='Email'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='phonenumber' style={{color: "white"}} >Phone</label>
            <input 
              required
              id='phone'
              value={phone}
              placeholder='Phone Number'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Form.Field >
            <label htmlFor='text' style={{color: "white"}} >Message</label>
            <input 
              
              id='message'
              value={message}
              placeholder='Message'
              onChange={this.handleChange}
            />
          </Form.Field>

          <Segment textAlign='center' basic>
                <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>
    </Segment>
  </div>

        );
  }
}

export default connect()(Contact);
