/* eslint-disable prettier/prettier */
import  {SET_CALENDARIO} from './actionTypes';
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
        .then(res => dispatch(fetchCalendario()));});
  };
};

export const setCalendario = calendario => {
  return {
    type:SET_CALENDARIO,
    payload: calendario,
  };
};
//busca dados do banco
export const fetchCalendario = () => {
  return dispatch => {
    axios.get('/calendarios.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawCalendarios = res.data;
        const calendario = [];
        for (let key in rawCalendarios){
          calendario.push({
            ...rawCalendarios[key],
            id: key,
          });
        }

        dispatch(setCalendario(calendario.reverse()));
      });
  };
};

export const edtCalendario = calendario => {
  return dispatch => {
    if (calendario.imagem.base64 != null){
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: calendario.imagem.base64,
      },
    }) .catch(err => console.log(err))
    .then(respo => {
        axios.get(`/calendarios/${calendario.id}.json`)
          .catch(err => console.log(err))
          .then(resp => {
          calendario.imagem = respo.data.imageUrl;
         const imagem = calendario.imagem;
         const nome = calendario.nome;
         const texto = calendario.texto;
         const dtVacina = calendario.dtVacina;
         axios.patch(`/calendarios/${calendario.id}.json`,{imagem,nome,texto,dtVacina})
          .catch(err=>console.log(err))
          .then(res => {
             dispatch(fetchCalendario());
          });
        });});
    } else {
      axios.get(`/calendarios/${calendario.id}.json`)
          .catch(err => console.log(err))
          .then(resp => {
         const nome = calendario.nome;
         const texto = calendario.texto;
         const dtVacina = calendario.dtVacina;
         axios.patch(`/calendarios/${calendario.id}.json`,{nome,texto,dtVacina})
          .catch(err=>console.log(err))
          .then(res => {
             dispatch(fetchCalendario());
          });
        });
    }
  };
};

export const delCalendario = calendario => {
  return dispatch => {
    axios.delete(`/calendarios/${calendario.calendarioId}.json`)
      .catch(err=>console.log(err))
      .then(res => {
        dispatch(fetchCalendario());
      });
  };
};
