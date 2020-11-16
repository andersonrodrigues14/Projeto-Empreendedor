/* eslint-disable prettier/prettier */
import {USER_LOGGED_IN,USER_LOGGED_OUT} from '../actions/actionTypes';

const initialState = {
  id: null,
  nome:null,
  cpf:null,
  imagem:null,
  adm:null,
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case USER_LOGGED_IN:
      return {
        ...state,
        id: action.payload.id,
        nome: action.payload.nome,
        cpf: action.payload.cpf,
        imagem: action.payload.imagem,
        adm:action.payload.adm,
      };
      case USER_LOGGED_OUT:
        return {
          ...state,
          id:null,
          nome:null,
          cpf:null,
          imagem:null,
          adm:null,
        };
      default:
        return state;
  }
};

export default reducer;


