/* eslint-disable prettier/prettier */
import {USER_LOGGED_IN,USER_LOGGED_OUT} from '../actions/actionTypes';

const initialState = {
  nome:null,
  cpf:null,
  imagem:null,
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case USER_LOGGED_IN:
      return {
        ...state,
        nome: action.payload.nome,
        cpf: action.payload.cpf,
        imagem: action.payload.imagem,
      };
      case USER_LOGGED_OUT:
        return {
          ...state,
          nome:null,
          cpf:null,
          imagem:null,
        };
      default:
        return state;
  }
};

export default reducer;


