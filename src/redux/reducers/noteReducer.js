const noteReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_NOTE':
        return [...action.payload];
      default:
        return state;
    }
  };
  
  // note will be on the redux state at:
  // state.note
  export default noteReducer;