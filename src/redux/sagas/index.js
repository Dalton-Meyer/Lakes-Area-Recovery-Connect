import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import userSaga from './userSaga';

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
function* fetchEvent(action) {
  try {
    const response = yield axios.get("/api/event");
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
  yield all([
    loginSaga(),
    registrationSaga(),
    userSaga(),
  ]);
}
