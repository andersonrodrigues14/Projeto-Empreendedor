/* eslint-disable prettier/prettier */
import  {ADD_CALENDARIO, DLT_VACINA} from './actionTypes';
import axios from 'axios';

export const addCalendario = calendario => {
  return dispatch =>{
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: calendario.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
        calendario.imagem = resp.data.imageUrl;
        axios.post('/calendarios.json',{...calendario})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));});
  };
  //return {
   // type: ADD_CALENDARIO,
   // payload: calendario,
  //};
};

export const dltVacina = calendario => {
  return {
    type: DLT_VACINA,
    payload: calendario,
  };
};
