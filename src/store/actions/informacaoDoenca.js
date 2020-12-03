/* eslint-disable prettier/prettier */
import {SET_INFORMACAODOENCA} from './actionTypes';
import axios from 'axios';
export const addDoenca = (doenca) => {
  return (dispatch) => {
    axios({
      url: 'uploadImage',
      baseURL:
        'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method: 'post',
      data: {
        image: doenca.imagem.base64,
      },
    })
      .catch((err) => console.log(err))
      .then((resp) => {
        doenca.imagem = resp.data.imageUrl;
        axios
          .post('/doencas.json', {...doenca})
          .catch((err) => console.log(err))
          .then((res) => dispatch(fetchDoenca()));
      });
  };
};

export const setDoenca = (doenca) => {
  return {
    type: SET_INFORMACAODOENCA,
    payload: doenca,
  };
};
//busca dados do banco
export const fetchDoenca = () => {
  return (dispatch) => {
    axios
      .get('/doencas.json')
      .catch((err) => console.log(err))
      .then((res) => {
        const rawDoencas = res.data;
        const doenca = [];
        for (let key in rawDoencas) {
          doenca.push({
            ...rawDoencas[key],
            id: key,
          });
        }

        dispatch(setDoenca(doenca.reverse()));
      });
  };
};

export const edtDoenca = (doenca) => {
  return (dispatch) => {
    if (doenca.imagem.base64 != null) {
      axios({
        url: 'uploadImage',
        baseURL:
          'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
        method: 'post',
        data: {
          image: doenca.imagem.base64,
        },
      })
        .catch((err) => console.log(err))
        .then((respo) => {
          axios
            .get(`/doencas/${doenca.id}.json`)
            .catch((err) => console.log(err))
            .then((resp) => {
              doenca.imagem = respo.data.imageUrl;
              const imagem = doenca.imagem;
              const titulo = doenca.titulo;
              const texto = doenca.texto;
              const dataPublicacao = doenca.dataPublicacao;
              axios
                .patch(`/doencas/${doenca.id}.json`, {
                  imagem,
                  titulo,
                  texto,
                  dataPublicacao,
                })
                .catch((err) => console.log(err))
                .then((res) => {
                  dispatch(fetchDoenca());
                });
            });
        });
    } else {
      axios
        .get(`/doencas/${doenca.id}.json`)
        .catch((err) => console.log(err))
        .then((resp) => {
          const titulo = doenca.titulo;
          const texto = doenca.texto;
          const dataPublicacao = doenca.dataPublicacao;
          axios
            .patch(`/doencas/${doenca.id}.json`, {
              titulo,
              texto,
              dataPublicacao,
            })
            .catch((err) => console.log(err))
            .then((res) => {
              dispatch(fetchDoenca());
            });
        });
    }
  };
};

export const delDoenca = (doenca) => {
  return (dispatch) => {
    axios
      .delete(`/doencas/${doenca.doencaId}.json`)
      .catch((err) => console.log(err))
      .then((res) => {
        dispatch(fetchDoenca());
      });
  };
};
