/* eslint-disable prettier/prettier */
import  {SET_MINHASVACINAS} from './actionTypes';
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
        .then(res =>  dispatch(fetchMinhasVacinas()));});
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

        dispatch(setMinhasVacinas(minhasVacinas.reverse()));
      });
  };
};

export const edtMinhasVacinas = minhasVacinas => {
  return dispatch => {
    if (minhasVacinas.imagem.base64 != null){
      axios({
        url:'uploadImage',
        baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
        method:'post',
        data:{
          image: minhasVacinas.imagem.base64,
        },
      }) .catch(err => console.log(err))
      .then(respo => {
          axios.get(`/minhasVacinas/${minhasVacinas.id}.json`)
            .catch(err => console.log(err))
            .then(resp => {
           minhasVacinas.imagem = respo.data.imageUrl;
           const imagem = minhasVacinas.imagem;
           const nome = minhasVacinas.nome;
           const texto = minhasVacinas.texto;
           const dtAplicacao = minhasVacinas.dtAplicacao;
           const dtRenovacao = minhasVacinas.dtRenovacao;
           axios.patch(`/minhasVacinas/${minhasVacinas.id}.json`,{imagem,nome,texto,dtAplicacao,dtRenovacao})
            .catch(err=>console.log(err))
            .then(res => {
               dispatch(fetchMinhasVacinas());
            });
          });});
      } else {
        axios.get(`/minhasVacinas/${minhasVacinas.id}.json`)
            .catch(err => console.log(err))
            .then(resp => {
           const nome = minhasVacinas.nome;
           const texto = minhasVacinas.texto;
           const dtAplicacao = minhasVacinas.dtAplicacao;
           const dtRenovacao = minhasVacinas.dtRenovacao;
           axios.patch(`/minhasVacinas/${minhasVacinas.id}.json`,{nome,texto,dtAplicacao,dtRenovacao})
            .catch(err=>console.log(err))
            .then(res => {
               dispatch(fetchMinhasVacinas());
            });
          });
      }
    };
};

export const delMinhasVacinas = minhasVacinas => {
  return dispatch => {
    axios.delete(`/minhasVacinas/${minhasVacinas.minhasVacinasId}.json`)
      .catch(err=>console.log(err))
      .then(res =>  dispatch(fetchMinhasVacinas()));
  };
};
