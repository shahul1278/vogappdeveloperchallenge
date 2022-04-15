let initialstate = {
  posts: [],
  loading: true,
  status: "",
  error: false,
};
const postReducer = (state = initialstate, action) => {
  console.log("action", action.payload);
  switch (action.type) {
    case "getposts":
      return {
        ...state,
        posts: action.payload,
        error: false,
      };

    case "deletepost":
      return {
        ...state,
        status: 200,
      };
    case "addpost":
      return {
        ...state,
        status: action.payload,
      };

    case "updatepost":
      return {
        ...state,
        status: 200,
      };

    case "searchpost":
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

    default:
      return state;
  }
};

export default postReducer;
