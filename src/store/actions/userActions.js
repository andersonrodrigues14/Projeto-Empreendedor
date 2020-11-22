/* eslint-disable prettier/prettier */
import {USER_LOGGED_IN,USER_LOGGED_OUT, LOADING_USER, USER_LOADED} from './actionTypes';
import axios from 'axios';

const authBaseUrl = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty';
const API_KEY = 'AIzaSyCDG1dYmjLOtM2vIGNeggqYqK-KHoPi3QY';

export const userLogged = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  };
};

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

export const createUser = (user) => {
  return dispatch => {
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: user.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
          user.imagem = resp.data.imageUrl;
          axios.post(`${authBaseUrl}/signupNewUser?key=${API_KEY}`,{
          email: user.email,
          password: user.senha,
          returnSecureToken: true,
      })
      .catch(err => console.log(err))
      .then(res => {
        if (res.data.localId) {
          axios.put(`/users/${res.data.localId}.json`,{
            imagem:user.imagem,
            nome: user.nome,
            cpf:user.cpf,
            email: user.email,
            password: user.senha,
            sus:user.sus,
            dtnascimento:user.dtnascimento,
            senha:user.senha,
            sangue:user.sangue,
            obs:user.obs,
            adm:user.adm,
          })
            .catch(err => console.log(err))
            .then(res => {
              console.log('Usuário criado com sucesso');
            });
        }
      });
    });};
};

export const loadingUser = () => {
  return {
    type: LOADING_USER,
  };
};

export const userLoaded = () => {
  return {
    type: USER_LOADED,
  };
};

export const login = user => {
  return dispatch => {
    dispatch(loadingUser());
    axios.post(`${authBaseUrl}/verifyPassword?key=${API_KEY}`,{
      email: user.email,
      password: user.senha,
      returnSecureToken:true,
    })
      .catch(err => console.log(err))
      .then(resp => {
        if (resp.data.localId){
          axios.get(`/users/${resp.data.localId}.json`)
          .catch(err => console.log(err))
          .then(res => {
            user.senha = null;
            user.nome = res.data.nome;
            user.imagem = res.data.imagem;
            user.adm = res.data.adm;
            user.id = resp.data.localId;
            user.cpf = res.data.cpf;
            user.email = res.data.email;
            user.sus = res.data.sus;
            user.dtnascimento = res.data.dtnascimento;
            user.sangue = res.data.sangue;
            user.obs = res.data.obs;
            dispatch(userLogged(user));
            dispatch(userLoaded());
          });
      }
    });
  };
};
