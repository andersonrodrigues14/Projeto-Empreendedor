/* eslint-disable prettier/prettier */
import  {ADD_INFORMACAODOENCA, DLT_VACINA} from './actionTypes';
import axios from 'axios';
export const addDoenca = doenca => {
  return dispatch => {
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: doenca.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
        doenca.imagem = resp.data.imageUrl;
        axios.post('/doencas.json',{...doenca})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));});
  };
  //return {
  //  type: ADD_INFORMACAODOENCA,
  //  payload: doenca,
  //};
};

export const dltVacina = doenca => {
  return {
    type: DLT_VACINA,
    payload: doenca,
  };
};
