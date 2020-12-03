/* eslint-disable prettier/prettier */
import {SET_VACINAS} from '../actions/actionTypes';

const initialState = {
  vacina: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VACINAS:
      return {
        ...state,
        vacina: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
