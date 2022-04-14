let initialstates = {
    country: [],
    selectedcountrydata:[],
    loading: true,
    error: false,
  };
  const getcountryreducer = (state = initialstates, action) => {
    console.log("action", action.payload);
    switch (action.type) {
      case "getcountry":
        return {
          ...state,
          country: action.payload,
          error: false,
        };
      case "loading1":
        return {
          ...state,
          loading: false,
        };
        case "selectedcountry":
            return {
                ...state,
                selectedcountrydata: action.payload,
                error: false,
            };
      case "error1":
        return {
          ...state,
          error: true,
        };
        default:
            return state;
  
    }
  };
  
  export default getcountryreducer;
  