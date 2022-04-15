let initialstates1 = {
  postal: [],
  loading: true,
  error: false,
};
const postalcodereducer = (state = initialstates1, action) => {
  console.log("action", action.payload);
  switch (action.type) {
    case "getpostal":
      return {
        ...state,
        postal: action.payload,
        error: false,
      };
    case "postalloading":
      return {
        ...state,
        loading: false,
      };

    case "error2":
      return {
        ...state,
        postal: [],
        error: true,
      };
    default:
      return state;
  }
};

export default postalcodereducer;
