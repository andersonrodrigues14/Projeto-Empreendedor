/* eslint-disable prettier/prettier */
import  {SET_INFORMACAODOENCA, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  doenca: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case SET_INFORMACAODOENCA:
        return {
          ...state,
          doenca:action.payload,
        };
      case DLT_VACINA:
        return {
          ...state,
          doenca: state.doenca.map(campanha =>{


          }),
        };
      default:
        return state;
    }
};

export default reducer;
