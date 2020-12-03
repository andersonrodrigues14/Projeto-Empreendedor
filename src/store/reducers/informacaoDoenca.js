/* eslint-disable prettier/prettier */
import {SET_INFORMACAODOENCA} from '../actions/actionTypes';

const initialState = {
  doenca: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INFORMACAODOENCA:
      return {
        ...state,
        doenca: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
