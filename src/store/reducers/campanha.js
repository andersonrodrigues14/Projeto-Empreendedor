/* eslint-disable prettier/prettier */
import  {SET_CAMPANHA, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  campanha: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case SET_CAMPANHA:
        return {
          ...state,
          campanha:action.payload,
        };
      case DLT_VACINA:
        return {
          ...state,
          campanha: state.campanha.map(campanha =>{


          }),
        };
      default:
        return state;
    }
};

export default reducer;
