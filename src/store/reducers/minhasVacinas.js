/* eslint-disable prettier/prettier */
import  {SET_MINHASVACINAS, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  minhasVacinas: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case SET_MINHASVACINAS:
        return {
          ...state,
          minhasVacinas:action.payload,
        };
      case DLT_VACINA:
        return {
          ...state,
          minhasVacinas: state.minhasVacinas.map(minhasVacinas =>{
            alert(minhasVacinas.id);
            alert(action.payload.vacinaId);
            if (minhasVacinas.id === action.payload.minhasVacinas){
              () => action.payload.remove;
            } else {
              alert('error');
            }
            return minhasVacinas;
          }),
        };
      default:
        return state;
    }
};

export default reducer;
