/* eslint-disable prettier/prettier */
import  {ADD_MINHASVACINAS, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  minhasVacinas: [{
    id: Math.random(),
    imagem: require('../../assets/teste.png'),
    nome : 'Primeira Vacina 1',
    texto: 'Texto primeira Camapanha',
    dtAplicacao: '20/09/1998',
    dtRenovacao: '20/09/1999',
  },{
  id:Math.random(),
    imagem: require('../../assets/ListCampanha.png'),
    nome : 'Segunda Vacina',
    texto: 'Segunda primeira Camapanha',
    dtAplicacao: '20/09/1998',
    dtRenovacao: '20/09/1999',
  },
  {
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nome : 'Terceira Vacina',
      texto: 'Terceira primeira Camapanha',
      dtAplicacao: '20/09/1998',
      dtRenovacao: '20/09/1999',
    },
],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_MINHASVACINAS:
        return {
          ...state,
          minhasVacinas: state.minhasVacinas.concat({
            ...action.payload,
          }),
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
