/* eslint-disable prettier/prettier */
import {SET_MINHASVACINAS} from '../actions/actionTypes';

const initialState = {
  minhasVacinas: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MINHASVACINAS:
      return {
        ...state,
        minhasVacinas: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
