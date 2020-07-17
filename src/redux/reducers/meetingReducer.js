const meetingReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_MEETING':
        return action.payload;
      default:
        return state;
    }
  };
  
  // meeting will be on the redux state at:
  // state.meeting
  export default meetingReducer;