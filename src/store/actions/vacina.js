/* eslint-disable prettier/prettier */
import  {ADD_VACINA, DLT_VACINA} from './actionTypes';
import axios from 'axios';


export const addVacina = vacina => {
  return dispatch => {
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: vacina.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
        vacina.imagem = resp.data.imageUrl;
        axios.post('/vacinas.json',{...vacina})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));});
  };


  //return {
  //  type: ADD_VACINA,
  //  payload: vacina,
  //};
};

export const dltVacina = vacina => {
  return {
    type: DLT_VACINA,
    payload: vacina,
  };
};
