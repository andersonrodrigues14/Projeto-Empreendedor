/* eslint-disable prettier/prettier */
import  {SET_FAMILIA} from '../actions/actionTypes';

const initialState = {
  familia: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case SET_FAMILIA:
        return {
          ...state,
          familia:action.payload,
        };
      default:
        return state;
    }
};

export default reducer;
