import React, { Component } from 'react';
import {Form, 
  Header,  
  List, 
  Input, 
  Segment,
  Container } from 'semantic-ui-react';
  import { Link } from 'react-router-dom';
  import axios from 'axios'




class Todo extends Component {
  state = { name: '', todos: [] }

  componentDidMount() {
    axios.get(`api/todos`)
    .then( ({ data: todos }) => this.setState({ todos}) )
  }

  handleSubmit = e => {
     e.preventDefault();
    const { name, todos } = this.state;
    axios.post(`/api/todos/`, {name})
    .then( ({ data }) => {
      this.setState({ todos: [data, ...todos], name: '' })
    })
  }

  updateTodo = id => {
    axios.put(`/api/todos/${id}`)
    .then( ({ data }) => {
      const todos = this.state.todos.map( todo => {
        if (todo.id === id )
        return data
        return todo
      });

      this.setState({ todos });
    });
  }

  render() {
    const { name, todos} = this.state;
    return (
      <Container className="todo_Page" >
          <Header as='h2' style={{color: "white"}} textAlign="center">Sweet Future Projects: </Header>
          <Form onSubmit={this.handleSubmit}>
            <Input 
              label="Add Item"
              required
              value={name}
              placeholder="IE: Clean up Backyard"
              onChange={ e => this.setState({name: e.target.value }) }
              />
          </Form>
         <Segment inverted>
         <a> Project lists: </a>
           <List divided inverted relaxed>
             <List.Content>
               <List.Header className="todo_list">
                   { todos.map( todo =>
                    <List.Item
                    Key={todo.id}
                    style={ todo.complete ? styles.complete : {} } 
                    onClick={ () => this.updateTodo(todo.id) }>
                    {todo.name}
                    </List.Item>
                    )
                    }
               </List.Header>
            </List.Content> 
           </List>
         </Segment>
     
        <div className="finished_Projects">
        <Segment inverted>
    <List divided inverted relaxed>
      <List.Item>
        <List.Content>
          <List.Header>
            <Link to="/Songlist"> 
               Spotify API 
            </Link> 
           </List.Header>
          These are the songs I listen to the most. updated automatically Via Spotify's API.
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
          <Link to="/FileUpload"> 
               API send friendly friday Message out 
            </Link> 
          </List.Header>
          Collects a phone number then delivers a friday song. 
        </List.Content>
      </List.Item>
      <List.Item>
        <List.Content>
          <List.Header>
          <Link to="/family"> 
               Family
            </Link> 
          </List.Header>
          Found myself a cute little family
        </List.Content>
      </List.Item>
    </List>
  </Segment>
        
        </div>
      
      </Container>
    );
  }
}



export default Todo;

