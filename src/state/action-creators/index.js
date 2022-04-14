import axios from "axios"

export const getposts=( posts)=>{
   console.log(posts)
    return (dispatch)=>{
        dispatch({type:"getposts",
        payload:posts
       })
    }
}


export const getcountry=( country)=>{
    console.log(country)
     return (dispatch)=>{
         dispatch({type:"getcountry",
         payload:country
        })
     }
 }
 
 export const getpostals=( country)=>{
    console.log(country)
     return (dispatch)=>{
         dispatch({type:"getpostal",
         payload:country
        })
     }
 }
 

export const addposts=(newpost)=>{

    return (dispatch)=>{
        dispatch({type:"addpost",
    payload:newpost})
    }
}

export const loading=(newpost)=>{

    return (dispatch)=>{
        dispatch({type:"loading",
    payload:newpost})
    }
}

export const loading1=(data)=>{

    return (dispatch)=>{
        dispatch({type:"loading1",
    payload:data})
    }
}
export const loading2=(data)=>{

    return (dispatch)=>{
        dispatch({type:"loading2",
    payload:data})
    }
}
export const error=(newpost)=>{

    return (dispatch)=>{
        dispatch({type:"error",
    payload:newpost})
    }
}
export const error1=(newpost)=>{

    return (dispatch)=>{
        dispatch({type:"error1",
    payload:newpost})
    }
}
export const error2=(newpost)=>{

    return (dispatch)=>{
        dispatch({type:"error2",
    payload:newpost})
    }
}
export const fetchdata=(data)=>{

    return(dispatch)=>{
dispatch(loading(data))
axios .get("https://jsonplaceholder.typicode.com/posts? _start=0&amp;_limit=20")
      .then((result) => {
        console.log(result.data);
        dispatch(getposts(result.data))
      }).catch(err=>{
          console.log(err)
        dispatch(error(data))
      })

    }
}


export const getcountrieslist=(data)=>{

    return(dispatch)=>{
dispatch(loading1(data))
axios.get("https://restcountries.com/v3/all?fields=name")
      .then((result) => {
        
        dispatch(getcountry(result.data))
      }).catch(err=>{
          console.log(err)
        dispatch(error1(data))
      })

    }
}

export const selectedcountrydata=( country)=>{
    console.log(country)
     return (dispatch)=>{
         dispatch({type:"selectedcountry",
         payload:country
        })
     }
 }
 
 export const deletepostid=( country)=>{
    console.log(country)
     return (dispatch)=>{
         dispatch({type:"deletepost",
         payload:country
        })
     }
 }
 
 
export const getselectedcountry=(data, search)=>{

    return(dispatch)=>{
dispatch(loading1(data))
axios.get(`http://universities.hipolabs.com/search?country=${search}`)
      .then((result) => {
    
        dispatch(selectedcountrydata(result.data))
       
      }).catch(err=>{
          console.log(err)
        dispatch(error1(data))
      })

    }
}

export const getpostalcodedetails=(data, search)=>{

    return(dispatch)=>{
dispatch(loading2(data))
axios.get(`https://api.zippopotam.us/us/${search}`)
      .then((result) => {
        
        dispatch(getpostals(result.data))
      }).catch(err=>{
          console.log(err)
        dispatch(error2(data))
      })

    }
}
export const  deletepostsbyid=(data, search)=>{
console.log(search)
    return(dispatch)=>{
dispatch(loading(data))
axios.delete(`https://jsonplaceholder.typicode.com/posts/:${search}`)
      .then((result) => {
        
        dispatch(deletepostid(result.status))
        
dispatch(loading(data))
axios .get("https://jsonplaceholder.typicode.com/posts? _start=0&amp;_limit=20")
      .then((result) => {
        console.log(result.data);
        dispatch(getposts(result.data))
      }).catch(err=>{
          console.log(err)
        dispatch(error(data))
      })

    
   
      }).catch(err=>{
          console.log(err)
        dispatch(error(data))
      })

    }
}

