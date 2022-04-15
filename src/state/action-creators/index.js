import axios from "axios";

///////Fetches all the posts////////
export const getposts = (posts) => {
  console.log(posts);
  return (dispatch) => {
    dispatch({ type: "getposts", payload: posts });
  };
};

export const fetchdata = (data) => {
  return (dispatch) => {
    dispatch(loading(data));
    axios
      .get("https://jsonplaceholder.typicode.com/posts? _start=0&amp;_limit=20")
      .then((result) => {
        console.log(result.data);
        dispatch(getposts(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(error(data));
      });
  };
};
///////////////// Add Posts /////////////////////
export const addpostid = (post) => {
  return (dispatch) => {
    dispatch({ type: "addpost", payload: post });
  };
};

export const addpostbyid = (data, newdata) => {
  console.log(newdata);
  return (dispatch) => {
    dispatch(loading(data));
    axios
      .post(`https://jsonplaceholder.typicode.com/posts`, {
        body: newdata,
      })
      .then((result) => {
        dispatch(addpostid(result.status));
      })
      .catch((err) => {
        console.log(err);
        dispatch(error(data));
      });
  };
};

///////////////// Update Post //////////////

export const updatepostid = (updatedpost) => {
  return (dispatch) => {
    dispatch({ type: "updatepost", payload: updatedpost });
  };
};

export const updatepostbyid = (data, newdata) => {
  return (dispatch) => {
    dispatch(loading(data));
    axios
      .put(`https://jsonplaceholder.typicode.com/posts/${newdata.id}`, {
        body: newdata,
      })
      .then((result) => {
        dispatch(updatepostid(result.status));
      })
      .catch((err) => {
        console.log(err);
        dispatch(error(data));
      });
  };
};

////////////////// Search Post /////////////////////////////

export const searchpostid = (updateddata) => {
  return (dispatch) => {
    dispatch({ type: "searchpost", payload: [updateddata] });
  };
};
export const searchpostbyid = (data, newdata) => {
  return (dispatch) => {
    dispatch(loading(data));
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${newdata}`)
      .then((result) => {
        dispatch(searchpostid(result.data));
      })
      .catch((err) => {
        console.log(err);
        dispatch(error(data));
      });
  };
};

//////////// Delete Post ////////////////////////////

export const deletepostid = (deletestatus) => {
  return (dispatch) => {
    dispatch({ type: "deletepost", payload: deletestatus });
  };
};

export const deletepostsbyid = (data, deletepostid) => {
  return (dispatch) => {
    dispatch(loading(data));
    axios
      .delete(`https://jsonplaceholder.typicode.com/posts/:${deletepostid}`)
      .then((result) => {
        dispatch(deletepostid(result.status));
      })
      .catch((err) => {
        console.log(err);
        dispatch(error(data));
      });
  };
};
//////////University Action Creators////////////////////

export const getcountry = (country) => {
    console.log(country);
    return (dispatch) => {
      dispatch({ type: "getcountry", payload: country });
    };
  };
  
  export const getcountrieslist = (data) => {
    return (dispatch) => {
      dispatch(universityloading(data));
      axios
        .get("https://restcountries.com/v3/all?fields=name") //Filter just name object
        .then((result) => {
          dispatch(getcountry(result.data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(error1(data));
        });
    };
  }; ///// for the dropddown data
  
  export const selectedcountrydata = (country) => {
    console.log(country);
    return (dispatch) => {
      dispatch({ type: "selectedcountry", payload: country });
    };
  };
  export const getselectedcountry = (data, selectedcountry) => {
    return (dispatch) => {
      dispatch(universityloading(data));
      axios
        .get(`http://universities.hipolabs.com/search?country=${selectedcountry}`)
        .then((result) => {
          dispatch(selectedcountrydata(result.data));
        })
        .catch((err) => {
          console.log(err);
          dispatch(error1(data));
        });
    };
  }; ///// retrieve all the universties from the selected country
  

///////// loading handlers//////////////////////
export const loading = (newpost) => {
  return (dispatch) => {
    dispatch({ type: "loading", payload: newpost });
  };
}; /// Async handling for the posts
export const universityloading = (data) => {
    return (dispatch) => {
      dispatch({ type: "universityloading", payload: data });
    };
  }; /// Async handling for the universty action creator
  

///////// Error Handlers //////////////////////
export const error = (newpost) => {
  return (dispatch) => {
    dispatch({ type: "error", payload: newpost });
  };
}; /// Error handling for the posts
export const error1 = (newpost) => {
    return (dispatch) => {
      dispatch({ type: "error1", payload: newpost });
    };
  }; 