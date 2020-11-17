/* eslint-disable prettier/prettier */
import  {SET_VACINAS,DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  vacina: [],
  isUploading:false,
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case SET_VACINAS:
        return {
          ...state,
          vacina:action.payload,
        };
      case DLT_VACINA:
        return {
          ...state,
          vacina: state.vacina.map(vacina =>{
            alert(vacina.id);
            alert(action.payload.vacinaId);
            if (vacina.id === action.payload.vacinaId){
              () => action.payload.remove;
            } else {
              alert('error');
            }
            return vacina;
          }),
        };
      default:
        return state;
    }
};

export default reducer;
