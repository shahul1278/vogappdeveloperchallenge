let initialstates1 = {
    postal: [],
 
    loading: true,
    error: false,
  };
  const searchpostreducer = (state = initialstates1, action) => {
    console.log("action", action.payload);
    switch (action.type) {
      case "getpostal":
        return {
          ...state,
          postal: action.payload,
          error: false,
        };
      case "loading2":
        return {
          ...state,
          loading: false,
        };
     
      case "error2":
        return {

          ...state,
postal:[],
          error: true,
        };
        default:
            return state;
  
    }
  };
  
  export default searchpostreducer;
  