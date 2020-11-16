/* eslint-disable prettier/prettier */
import  {ADD_FAMILIA, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  familia: [{
    id: Math.random(),
    imagem: require('../../assets/teste.png'),
    nomeFamiliar : 'Primeiro Familiar 1',
    vacina: 'Gripe',
    dtAplicacao: '20/09/1998',
    dtRenovacao: '20/09/1999',
  },{
  id:Math.random(),
    imagem: require('../../assets/ListCampanha.png'),
    nomeFamiliar : 'Segunda Familiar',
    vacina: 'Gripe 2',
    dtAplicacao: '20/09/1998',
    dtRenovacao: '20/09/1999',
  },
  {
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nomeFamiliar : 'Terceira Familiar',
      vacina: 'Gripe 3',
      dtAplicacao: '20/09/1998',
      dtRenovacao: '20/09/1999',
    },
],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_FAMILIA:
        return {
          ...state,
          familia: state.familia.concat({
            ...action.payload,
          }),
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
