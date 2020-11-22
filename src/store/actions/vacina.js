/* eslint-disable prettier/prettier */
import  {SET_VACINAS} from './actionTypes';
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
};

export const edtVacina = vacina => {
  return dispatch => {
    axios.get(`/vacinas/${vacina.id}.json`)
      .catch(err => console.log(err))
      .then(resp => {
         console.log(vacina);
         console.log(vacina.id);
         const nome = vacina.nome
          .then(res => {
             dispatch(fetchVacina(nome));
          });
        });
    };
};

export const delVacina = vacina => {
  return dispatch => {
    axios.delete(`/vacinas/${vacina.vacinaId}.json`)
      .catch(err=>console.log(err))
      .then(res => {
        dispatch(fetchVacina());
      });
  };
};


export const setVacina = vacina => {
  return {
    type:SET_VACINAS,
    payload: vacina,
  };
};
//busca dados do banco
export const fetchVacina = () => {
  return dispatch => {
    axios.get('/vacinas.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawVacinas = res.data;
        const vacina = [];
        for (let key in rawVacinas){
          vacina.push({
            ...rawVacinas[key],
            id: key,
          });
        }

        dispatch(setVacina(vacina.reverse()));
      });
  };
};

export const fetchVacina2 = vacina => {
  return dispatch => {
    axios.get(`/vacinas/${vacina.vacinaId}.json`)
      .catch(err => console.log(err))
      .then(res => {
        const rawVacinas = res.data;
        const vacina = [];
        for (let key in rawVacinas){
          vacina.push({
            ...rawVacinas[key],
            id: key,
          });
        }

        dispatch(setVacina(vacina.reverse()));
      });
  };
};


