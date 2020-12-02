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
        .then(res =>  dispatch(fetchCampanha()));});
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

        dispatch(setCampanha(campanha.reverse()));
      });
  };
};

export const edtCampanha = campanha => {
  return dispatch => {
    if (campanha.imagem.base64 != null){
      axios({
        url:'uploadImage',
        baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
        method:'post',
        data:{
          image: campanha.imagem.base64,
        },
      }) .catch(err => console.log(err))
      .then(respo => {
          axios.get(`/campanhas/${campanha.id}.json`)
            .catch(err => console.log(err))
            .then(resp => {
           campanha.imagem = respo.data.imageUrl;
           const imagem = campanha.imagem;
           const nome = campanha.nome;
           const texto = campanha.texto;
           const dtInicio = campanha.dtInicio;
           const dtCadastro = campanha.dtCadastro;
           axios.patch(`/campanhas/${campanha.id}.json`,{imagem,nome,texto,dtInicio,dtCadastro})
            .catch(err=>console.log(err))
            .then(res => {
               dispatch(fetchCampanha());
            });
          });});
      } else {
        axios.get(`/campanhas/${campanha.id}.json`)
            .catch(err => console.log(err))
            .then(resp => {
              const nome = campanha.nome;
              const texto = campanha.texto;
              const dtInicio = campanha.dtInicio;
              const dtCadastro = campanha.dtCadastro;
           axios.patch(`/campanhas/${campanha.id}.json`,{nome,texto,dtInicio,dtCadastro})
            .catch(err=>console.log(err))
            .then(res => {
               dispatch(fetchCampanha());
            });
          });
      }
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
