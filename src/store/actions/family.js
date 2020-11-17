/* eslint-disable prettier/prettier */
import  {ADD_FAMILIA, DLT_VACINA} from './actionTypes';
import axios from 'axios';

export const addFamilia = familia => {
  return dispatch => {
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: familia.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
        familia.imagem = resp.data.imageUrl;
        axios.post('/familias.json',{...familia})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));});
  };
  //return {
  //  type: ADD_FAMILIA,
   // payload: familia,
  //};
};

export const dltVacina = familia => {
  return {
    type: DLT_VACINA,
    payload: familia,
  };
};
