/* eslint-disable prettier/prettier */
import  {ADD_PROFILE, DLT_VACINA} from './actionTypes';
import axios from 'axios';

export const addProfile = profile => {
  return dispatch => {
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: profile.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
        profile.imagem = resp.data.imageUrl;
        axios.post('/users.json',{...profile})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));});
  };
  //return {
  //  type: ADD_PROFILE,
  //  payload: profile,
  //};
};

export const dltVacina = profile => {
  return {
    type: DLT_VACINA,
    payload: profile,
  };
};
