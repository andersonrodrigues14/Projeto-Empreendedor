/* eslint-disable prettier/prettier */
import  {SET_CALENDARIO, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  calendario: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case SET_CALENDARIO:
        return {
          ...state,
          calendario:action.payload,
        };
      case DLT_VACINA:
        return {
          ...state,
          calendario: state.calendario.map(calendario =>{


          }),
        };
      default:
        return state;
    }
};

export default reducer;
