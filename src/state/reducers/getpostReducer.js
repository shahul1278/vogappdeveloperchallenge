let initialstate = {
  posts: [],
  loading: true,
  status: "",
  error: false,
};
const getpostreducer = (state = initialstate, action) => {
  console.log("action", action.payload);
  switch (action.type) {
    case "getposts":
      return {
        ...state,
        posts: action.payload,
        error: false,
      };
    case "loading":
      return {
        ...state,
        loading: false,
      };
    case "error":
      return {
        ...state,
        error: true,
      };
      

    case "deletepost":
      return {
        ...state,
        status:200,
      };
      
    case "updatepost":
      return state;
    case "searchpost":
      return state;
    case "deletepost":
      return state;
    default:
      return state;
  }
};

export default getpostreducer;
