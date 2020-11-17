/* eslint-disable prettier/prettier */
import  {SET_FAMILIA, DLT_VACINA} from '../actions/actionTypes';

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
      case DLT_VACINA:
        return {
          ...state,
          familia: state.familia.map(familia =>{


          }),
        };
      default:
        return state;
    }
};

export default reducer;
