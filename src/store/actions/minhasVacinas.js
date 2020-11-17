/* eslint-disable prettier/prettier */
import  {SET_MINHASVACINAS, DLT_VACINA} from './actionTypes';
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
};

export const setMinhasVacinas = minhasVacinas => {
  return {
    type:SET_MINHASVACINAS,
    payload: minhasVacinas,
  };
};

//busca dados do banco
export const fetchMinhasVacinas = () => {
  return dispatch => {
    axios.get('/minhasVacinas.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawMinhasVacinas = res.data;
        const minhasVacinas = [];
        for (let key in rawMinhasVacinas){
          minhasVacinas.push({
            ...rawMinhasVacinas[key],
            id: key,
          });
        }

        dispatch(setMinhasVacinas(minhasVacinas));
      });
  };
};

export const dltVacina = minhasVacinas => {
  return {
    type: DLT_VACINA,
    payload: minhasVacinas,
  };
};
