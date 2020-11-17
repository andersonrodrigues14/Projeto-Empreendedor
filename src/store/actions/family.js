/* eslint-disable prettier/prettier */
import  {SET_FAMILIA, DLT_VACINA} from './actionTypes';
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
};

export const setFamilia = familia => {
  return {
    type:SET_FAMILIA,
    payload: familia,
  };
};
//busca dados do banco
export const fetchFamilia = () => {
  return dispatch => {
    axios.get('/familias.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawFamilia = res.data;
        const familia = [];
        for (let key in rawFamilia){
          familia.push({
            ...rawFamilia[key],
            id: key,
          });
        }

        dispatch(setFamilia(familia));
      });
  };
};


export const dltVacina = familia => {
  return {
    type: DLT_VACINA,
    payload: familia,
  };
};
