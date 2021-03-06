import React, { Component } from 'react';
import {connect} from 'react-redux';
import { NavLink, Redirect } from 'react-router-dom';
import {Pane} from 'evergreen-ui'
import './RegisterPage.css'
import swal from 'sweetalert'
class RegisterPage extends Component {
  state = {
    username: '',
    password: '',
    redirect: false
  };

  registerUser = (event) => {
    event.preventDefault();

    if (this.state.username && this.state.password) {
      this.props.dispatch({
        type: 'REGISTER',
        payload: {
          username: this.state.username,
          password: this.state.password,
        },
      }); 
    } else {
      this.props.dispatch({type: 'REGISTRATION_INPUT_ERROR'});
    }
  } // end registerUser

  handleInputChangeFor = propertyName => (event) => {
    this.setState({
      [propertyName]: event.target.value,
    });
  }
  renderRedirect = () => {
    if (this.state.redirect === true) {
      return <Redirect to = '/home'/>
    }
  }
  render() {
    return (
      <Pane
        width='100%'
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="default">
        <Pane
        className='background'
          width='70%'
          height={850}
          display="flex"
          alignItems="center"
          justifyContent="center"
          border="default">
      <div className='registerForm'>
        {this.renderRedirect()}
        {this.props.user.id  ? (this.setState({redirect: true})) : false}
        {this.props.errors.registrationMessage && (
          <h2
            className="alert"
            role="alert"
          >
            {this.props.errors.registrationMessage}
          </h2>
        )}
        <form onSubmit={this.registerUser}>
          <h1>Register User</h1>
          <div>
            <label htmlFor="username">
              Username:
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChangeFor('username')}
              />
            </label>
          </div>
          <div>
            <label htmlFor="password">
              Password:
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChangeFor('password')}
              />
            </label>
          </div>
          <div>
            <input
              className="register"
              type="submit"
              name="submit"
              value="Register"
            />
          </div>
        </form>
        <center>
          <NavLink to='/login'>
          <button
            type="button"
            className="link-button"
            onClick={() => {this.props.dispatch({type: 'SET_TO_LOGIN_MODE'})}}
          >
            Login
          </button>
          </NavLink>
        </center>
      </div>
      </Pane>
      </Pane>
    );
  }
}

// Instead of taking everything from state, we just want the error messages.
// if you wanted you could write this code like this:
// const mapStateToProps = ({errors}) => ({ errors });
const mapStateToProps = state => ({
  errors: state.errors,
  user: state.user,
});

export default connect(mapStateToProps)(RegisterPage);

