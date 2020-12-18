import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn2186565Reducer from '../features/SignIn2186565/redux/reducers'
import SignUp11186563Reducer from '../features/SignUp11186563/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn2186565: SignIn2186565Reducer,
SignUp11186563: SignUp11186563Reducer,

});