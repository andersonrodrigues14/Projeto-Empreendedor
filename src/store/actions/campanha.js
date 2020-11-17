/* eslint-disable prettier/prettier */
import  {ADD_CAMPANHA, DLT_VACINA} from './actionTypes';
import axios from 'axios';

export const addCampanha = campanha => {
  return dispatch => {
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: campanha.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
        campanha.imagem = resp.data.imageUrl;
        axios.post('/campanhas.json',{...campanha})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));});
  };
  //return {
  //  type: ADD_CAMPANHA,
  //  payload: campanha,
  //};
};

export const dltVacina = campanha => {
  return {
    type: DLT_VACINA,
    payload: campanha,
  };
};
