const LoggedReducer = (state = [], action) => {
  switch (action.type) {
    case "GETAPI":
      return action.payload;
    default:
      return state; 
  }
};

export default LoggedReducer;
