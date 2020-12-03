/* eslint-disable prettier/prettier */
import {SET_CALENDARIO} from '../actions/actionTypes';

const initialState = {
  calendario: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CALENDARIO:
      return {
        ...state,
        calendario: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
