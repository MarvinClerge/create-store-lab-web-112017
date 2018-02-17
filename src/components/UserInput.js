import React, { Component } from 'react';

class UserInput extends Component {
  state = {
    username: '',
    hometown: ''
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: "ADD_USER",
      user: {
        username: this.state.username,
        hometown: this.state.hometown
      }
    })
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' name='username' onChange={this.handleChange} value={this.state.username}/>
          <input type='text' name='hometown' onChange={this.handleChange} value={this.state.hometown}/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
};

export default UserInput;
