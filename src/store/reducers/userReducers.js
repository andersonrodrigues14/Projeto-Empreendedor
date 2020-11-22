/* eslint-disable prettier/prettier */
import {USER_LOGGED_IN,USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from '../actions/actionTypes';

const initialState = {
  nome:null,
  email:null,
  imagem:null,
  //adm:null,
  isLoading:false,
  id:null,
};

const reducer = (state = initialState, action) => {
  switch (action.type){
    case USER_LOGGED_IN:
      return {
        ...state,
        nome: action.payload.nome,
        email: action.payload.email,
        imagem: action.payload.imagem,
        adm:action.payload.adm,
        id: action.payload.id,
        cpf: action.payload.cpf,
        sus: action.payload.sus,
        dtnascimento: action.payload.dtnascimento,
        sangue: action.payload.sangue,
        obs: action.payload.obs,
      };
      case USER_LOGGED_OUT:
        return {
          ...state,
          nome:null,
          email:null,
          imagem:null,
          adm:null,
          id: null,
          cpf: null,
          sus: null,
          dtnascimento: null,
          sangue: null,
          obs: null,
        };
      case LOADING_USER:
        return {
          ...state,
          isLoading: true,
        };
      case USER_LOADED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return state;
  }
};

export default reducer;


