import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'
import AboutPage from '../AboutPage/AboutPage';
import LoginPage from '../LoginPage/LoginPage';
import RegisterPage from '../RegisterPage/RegisterPage'
import HomePage from '../HomePage/HomePage'
import MeetingPage from '../MeetingPage/MeetingPage'
import ContactPage from '../ContactPage/ContactPage'
import ReadingPage from '../ReadingPage/ReadingPage'
import NotesPage from '../NotesPage/NotesPage'
import './App.css';
import EventsPage from '../EventsPage/EventsPage';

class App extends Component {
  componentDidMount() {
    this.props.dispatch({ type: 'FETCH_USER' })
  }

  render() {
    return (
      <Router>
        <div>
          <Nav />
          <Switch>
            {/* Visiting localhost:3000 will redirect to localhost:3000/home */}
            <Redirect exact from="/" to="/home" />
            {/* Visiting localhost:3000/about will show the about page.
            This is a route anyone can see, no login necessary */}
            <Route
              exact
              path="/about"
              component={AboutPage}
            />
            <Route
              exact
              path='/login'
              component={LoginPage}
            />
            <Route
              exact
              path='/register'
              component={RegisterPage}
            />
            <Route
              exact
              path='/home'
              component={HomePage}
            />
            <Route
              exact
              path='/meetings'
              component={MeetingPage}
            />
            <Route
              exact
              path='/events'
              component={EventsPage}
            />
            <Route
              exact
              path='/contact'
              component={ContactPage}
            />

            {/* For protected routes, the view could show one of several things on the same route.
            Visiting localhost:3000/home will show the UserPage if the user is logged in.
            If the user is not logged in, the ProtectedRoute will show the 'Login' or 'Register' page.
            Even though it seems like they are different pages, the user is always on localhost:3000/home */}
            
            {/* This works the same as the other protected route, except that if the user is logged in,
            they will see the info page instead. */}
            <ProtectedRoute
              exact
              path="/reading"
              component={ReadingPage}
            />
            <ProtectedRoute
              exact
              path="/notes"
              component={NotesPage}
            />
            {/* If none of the other routes matched, we will show a 404. */}
            <Route render={() => <h1>404</h1>} />
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}

export default connect()(App);
