/* eslint-disable prettier/prettier */
import  {ADD_CALENDARIO, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  calendario: [{
    id: Math.random(),
    imagem: require('../../assets/teste.png'),
    nome : 'teste Data Vacina',
    texto: 'Texto primeira Camapanha',
    dtVacina: '10/05/2020',
  },{
  id:Math.random(),
    imagem: require('../../assets/ListCampanha.png'),
    nome : 'Segunda Data Vacina',
    texto: 'Segunda primeira Camapanha',
    dtVacina: '10/05/2020',
  },
  {
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nome : 'Terceira Data Vacina',
      texto: 'Terceira primeira Camapanha',
      dtVacina: '10/05/2020',
    },
],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_CALENDARIO:
        return {
          ...state,
          calendario: state.calendario.concat({
            ...action.payload,
          }),
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
