import { all, takeEvery, put } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';
import axios from 'axios';

function* fetchContact(action) {
  try {
    const response = yield axios.get("/api/contact");
    yield put({ type: "SET_CONTACT", payload: response.data });
  } catch (error) {
    console.log("Error getting contacts ", error);
  }
} 
function* fetchNotes(action) {
  try {
    const response = yield axios.get("/api/notes");
    yield put({ type: "SET_NOTE", payload: response.data });
  } catch (error) {
    console.log("Error getting notes ", error);
  }
} 
function* addNotes(action) {
  try {
    yield axios.put("/api/notes", action.payload)
    const response = yield axios.get("/api/notes");
    yield put({ type: "SET_NOTE", payload: response.data });
  } catch (error) {
    console.log("Error getting notes ", error);
  }
} 
function* fetchEvent(action) {
  try {
    const response = yield axios.get("/api/event");
    yield put({ type: "SET_EVENT", payload: response.data });
  } catch (error) {
    console.log("Error getting events ", error);
  }
} 
function* fetchEventMain(action) {
  try {
    const response = yield axios.get("/api/event/main");
    yield put({ type: "SET_EVENT", payload: response.data });
  } catch (error) {
    console.log("Error getting events ", error);
  }
} 
function* fetchMeeting(action) {
  try {
    const response = yield axios.get("/api/meeting");
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
  yield takeEvery("FETCH_NOTES", fetchNotes);
  yield takeEvery("ADD_NOTE", addNotes);
  yield takeEvery("FETCH_CONTACT", fetchContact);
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
