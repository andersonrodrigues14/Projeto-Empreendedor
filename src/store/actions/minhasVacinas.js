/* eslint-disable prettier/prettier */
import  {ADD_MINHASVACINAS, DLT_VACINA} from './actionTypes';
import axios from 'axios';

export const addMinhasVacinas = minhasVacinas => {
  return dispatch => {
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: minhasVacinas.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
        minhasVacinas.imagem = resp.data.imageUrl;
        axios.post('/minhasVacinas.json',{...minhasVacinas})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));});
  };
  //return {
  //  type: ADD_MINHASVACINAS,
  //  payload: minhasVacinas,
  //};
};

export const dltVacina = minhasVacinas => {
  return {
    type: DLT_VACINA,
    payload: minhasVacinas,
  };
};
