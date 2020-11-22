/* eslint-disable prettier/prettier */
import  {SET_CAMPANHA} from './actionTypes';
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

export const edtCampanha = campanha => {
  return dispatch => {
    axios.get(`/campanhas/${campanha.id}.json`)
      .catch(err => console.log(err))
      .then(resp => {
         console.log(campanha);
         console.log(campanha.id);
         const nome = campanha.nome
          .then(res => {
             dispatch(fetchCampanha(nome));
          });
        });
    };
};

export const delCamapanha = campanha => {
  return dispatch => {
    axios.delete(`/campanhas/${campanha.campanhaId}.json`)
      .catch(err=>console.log(err))
      .then(res => {
        dispatch(fetchCampanha());
      });
  };
};
