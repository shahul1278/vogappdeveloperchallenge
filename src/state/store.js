import { createStore, applyMiddleware  } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index";
import { composeWithDevTools } from 'redux-devtools-extension';

const composeEnhancers = composeWithDevTools({
    // Specify here name, actionsBlacklist, actionsCreators and other options
  });
export const store=createStore(reducers,{},
    
    composeEnhancers(
        applyMiddleware(thunk)
        // other store enhancers if any
      )
    )
