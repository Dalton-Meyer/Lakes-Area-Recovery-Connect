import { combineReducers } from 'redux';
import errors from './errorsReducer';
import loginMode from './loginModeReducer';
import user from './userReducer';
import contact from './contactReducer';
import event from './eventReducer';
import meeting from './meetingReducer';
import note from './noteReducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  loginMode, // will have a value of 'login' or 'registration' to control which screen is shown
  user, // will have an id and username if someone is logged in
  contact, // will contain all the information for the contacts
  event, // will have all the info for events
  meeting, // will have all the info depending on the town and meeting type you choose
  note, // will contain all the logged in users personal notes
});

export default rootReducer;
