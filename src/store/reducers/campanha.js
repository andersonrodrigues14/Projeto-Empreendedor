/* eslint-disable prettier/prettier */
import {SET_CAMPANHA} from '../actions/actionTypes';

const initialState = {
  campanha: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CAMPANHA:
      return {
        ...state,
        campanha: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
