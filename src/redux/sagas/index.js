import { all, takeEvery, put } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import axios from 'axios';

// grabs all the contacts for the contact type you have selected
function* fetchContact(action) { 
  try {
    const response = yield axios.get(`/api/contact/${action.payload}`);
    yield put({ type: "SET_CONTACT", payload: response.data });
  } catch (error) {
    console.log("Error getting contacts ", error);
  }
} 
// grabs all notes for the currents user that is logged in
function* fetchNotes(action) {
  try {
    const response = yield axios.get(`/api/notes/${action.payload}`);
    yield put({ type: "SET_NOTE", payload: response.data });
  } catch (error) {
    console.log("Error getting notes ", error);
  }
} 
// sends off the post request for new note and brings back all the information once it is done
function* addNotes(action) {
  try {
    yield axios.post("/api/notes", action.payload)
    const response = yield axios.get(`/api/notes/${action.payload.user}`)
    yield put({ type: "SET_NOTE", payload: response.data })
  } catch (error) {
    console.log("Error getting notes ", error);
  }
} 
// sends off the put request to change the information of one of the notes in database
// then returns with all the info 
function* editNotes(action) {
  try {
    yield axios.put("/api/notes", action.payload)
    const response = yield axios.get(`/api/notes/${action.payload.user}`)
    yield put({ type: "SET_NOTE", payload: response.data })
  } catch (error) {
    console.log("Error getting notes ", error);
  }
} 
// deletes selected note from server then comes back with a updated list of current notes
function* deleteNotes(action) {
  try {
    yield axios.delete(`/api/notes/${action.payload.id}`)
    const response = yield axios.get(`/api/notes/${action.payload.user}`);
    yield put({ type: "SET_NOTE", payload: response.data });
  } catch (error) {
    console.log("Error getting notes ", error);
  }
} 
// grabs all the events inside the database
function* fetchEvent(action) {
  try {
  
    const response = yield axios.get("/api/event");
    yield put({ type: "SET_EVENT", payload: response.data });
  } catch (error) {
    console.log("Error getting events ", error);
  }
} 
// sends off a post request to add new event then updates the redux
function* addEvent(action) {
  try {
    yield axios.post("/api/event", action.payload)
    yield put({ type: "FETCH_EVENT"});
  } catch (error) {
    console.log("Error adding events ", error);
  }
} 
// deletes selected event from server then updates the redux
function* deleteEvent(action) {
  try {
    yield axios.delete(`/api/event/${action.payload}`)
    yield put({ type: "FETCH_EVENT"});
  } catch (error) {
    console.log("Error getting notes ", error);
  }
} 
// grabs the top 3 events happening the soonest
function* fetchEventMain(action) {
  try {
    const response = yield axios.get("/api/event/main");
    yield put({ type: "SET_EVENT", payload: response.data });
  } catch (error) {
    console.log("Error getting events ", error);
  }
} 
// grabs meetings from database based on whats selected then updates the redux
function* fetchMeeting(action) {
  try {
    const response = yield axios.get(`/api/meeting/${action.payload.town}/${action.payload.meeting}`);
    yield put({ type: "SET_MEETING", payload: response.data });
  } catch (error) {
    console.log("Error getting meetings ", error);
  }
} 

// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield takeEvery("FETCH_MEETINGS", fetchMeeting);
  yield takeEvery("FETCH_EVENT_MAIN", fetchEventMain);
  yield takeEvery("FETCH_EVENT", fetchEvent);
  yield takeEvery("ADD_EVENT", addEvent);
  yield takeEvery("DELETE_EVENT", deleteEvent);
  yield takeEvery("FETCH_NOTES", fetchNotes);
  yield takeEvery("ADD_NOTE", addNotes);
  yield takeEvery("FETCH_CONTACT", fetchContact);
  yield takeEvery("DELETE_NOTE", deleteNotes);
  yield takeEvery("EDIT_NOTE", editNotes);
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
