/* eslint-disable prettier/prettier */
import  {ADD_VACINA, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  vacina: [{
    id: Math.random(),
    imagem: require('../../assets/teste.png'),
    nome : 'Primeira Vacina',
    texto: 'Texto primeira Vacina',
    tempoDuracao: '2 anos',
  },{
    id:Math.random(),
    imagem: require('../../assets/ListCampanha.png'),
    nome : 'Segunda Vacina',
    texto: 'Segunda primeira Vacina',
    tempoDuracao: '7 anos',
  },
  {
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nome : 'Terceira Vacina',
      texto: 'Terceira primeira Vacina',
      tempoDuracao: '5 anos',
    },
],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_VACINA:
        return {
          ...state,
          vacina: state.vacina.concat({
            ...action.payload,
          }),
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
