/* eslint-disable prettier/prettier */
import  {SET_INFORMACAODOENCA, DLT_VACINA} from './actionTypes';
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
};

export const setDoenca = doenca => {
  return {
    type:SET_INFORMACAODOENCA,
    payload: doenca,
  };
};
//busca dados do banco
export const fetchDoenca = () => {
  return dispatch => {
    axios.get('/doencas.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawDoencas = res.data;
        const doenca = [];
        for (let key in rawDoencas){
          doenca.push({
            ...rawDoencas[key],
            id: key,
          });
        }

        dispatch(setDoenca(doenca));
      });
  };
};


export const dltVacina = doenca => {
  return {
    type: DLT_VACINA,
    payload: doenca,
  };
};
