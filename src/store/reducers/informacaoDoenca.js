/* eslint-disable prettier/prettier */
import  {ADD_INFORMACAODOENCA, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  doenca: [{
    id: Math.random(),
    imagem: require('../../assets/teste.png'),
    titulo : 'Titulo Informação 10',
    texto: 'Texto primeira informação',
    dataPublicacao: '14/11/1998',
  },{
  id:Math.random(),
    imagem: require('../../assets/ListCampanha.png'),
    titulo : 'Titulo Informação 2',
    texto: 'Texto segunda informação',
    dataPublicacao: '14/11/1998',
  },
  {
    id:Math.random(),
      imagem: require('../../assets/ListCampanha.png'),
      titulo : 'Titulo Informação 3',
      texto: 'Texto terceira informação',
      dataPublicacao: '14/11/1998',
    },
],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_INFORMACAODOENCA:
        return {
          ...state,
          doenca: state.doenca.concat({
            ...action.payload,
          }),
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
