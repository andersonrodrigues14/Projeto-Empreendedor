/* eslint-disable prettier/prettier */
import  {ADD_CAMPANHA, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  campanha: [{
    id: Math.random(),
    imagem: require('../../assets/dados.png'),
    nome : 'teeste Campanha',
    texto: 'Texto primeira Camapanha',
    dtInicio: '10/10/2020',
    dtCadastro: '10/10/2222',
  },{
  id:Math.random(),
    imagem: require('../../assets/ListCampanha.png'),
    nome : 'Segunda Campanha',
    texto: 'Segunda primeira Camapanha',
    dtInicio: '10/10/2020',
    dtCadastro: '10/10/2222',
  },
  {
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      nome : 'Terceira Campanha',
      texto: 'Terceira primeira Camapanha',
      dtInicio: '10/10/2020',
      dtCadastro: '10/10/2222',
    },
],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_CAMPANHA:
        return {
          ...state,
          campanha: state.campanha.concat({
            ...action.payload,
          }),
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
