import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import { Avatar, SelectMenu, Button, Pane } from 'evergreen-ui'
import './Nav.css';


const Nav = (props) => (
  <div className="nav">
    <Link to="/home">
      <h2 className="nav-title">Lakes Area Recovery Connect</h2>
    </Link>
    <div className="nav-right">
      <Link className='nav-link' to='/home'>
        HOME
        </Link>
      <Link className="nav-link" to="/meetings">
        MEETINGS
      </Link>
      <Link className="nav-link" to="/events">
        EVENTS
      </Link>
      <Link className="nav-link" to="/contact">
        CONTACTS
      </Link>
      <Link className="nav-link" to="/about">
        ABOUT
      </Link>

      {/* Show this link if they are logged in or not,
        but call this link 'Home' if they are logged in,
        and call this link 'Login / Register' if they are not */}
      {/* {props.user.id ? `${props.user.username}` : 'Login / Register'}
      </Link> */}
      {/* Show the link to the info page and the logout button if the user is logged in */}
      {props.user.id ?
        <>
          <SelectMenu
            height={200}
            title="Menu"
            options={[]}
            emptyView={({ close }) => (
              <Pane className='dropDown'  >
                <Link to='/reading'><Button width="100%">Daily Reading</Button></Link>
                <Link to='/notes'><Button width="100%">Notes</Button></Link>
                <Link to='/home'><Button width="100%">Settings</Button></Link>
                <LogOutButton className="log-in" />
              </Pane>
            )}
          >
            <Avatar className='avatar' cursor='pointer' margin={10} isSolid color='green' name={props.user.username} size={40} />
          </SelectMenu>
        </>
        : <Link className='nav-link' to='/login'>Login/Register</Link>}
      {/* Always show this link since the about page is not protected */}
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
