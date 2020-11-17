/* eslint-disable prettier/prettier */
import  {SET_CAMPANHA, DLT_VACINA} from './actionTypes';
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
};

export const setCampanha = campanha => {
  return {
    type:SET_CAMPANHA,
    payload: campanha,
  };
};
//busca dados do banco
export const fetchCampanha = () => {
  return dispatch => {
    axios.get('/campanhas.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawCampanhas = res.data;
        const campanha = [];
        for (let key in rawCampanhas){
          campanha.push({
            ...rawCampanhas[key],
            id: key,
          });
        }

        dispatch(setCampanha(campanha));
      });
  };
};

export const dltVacina = campanha => {
  return {
    type: DLT_VACINA,
    payload: campanha,
  };
};
