/* eslint-disable prettier/prettier */
import  {SET_PROFILE} from '../actions/actionTypes';

const initialState = {
  profile: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case SET_PROFILE:
        return {
          ...state,
          profile:action.payload,
        };
      default:
        return state;
    }
};

export default reducer;
