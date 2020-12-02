/* eslint-disable prettier/prettier */
import  {SET_FAMILIA} from './actionTypes';
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
        .then(res =>  dispatch(fetchFamilia()));});
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

        dispatch(setFamilia(familia.reverse()));
      });
  };
};

export const edtFamilia = familia => {
  return dispatch => {
    if (familia.imagem.base64 != null){
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: familia.imagem.base64,
      },
    }) .catch(err => console.log(err))
    .then(respo => {
        axios.get(`/familias/${familia.id}.json`)
          .catch(err => console.log(err))
          .then(resp => {
          familia.imagem = respo.data.imageUrl;
         const imagem = familia.imagem;
         const nomeFamiliar = familia.nomeFamiliar;
         const dtNascimento = familia.dtNascimento;
         axios.patch(`/familias/${familia.id}.json`,{imagem,nomeFamiliar,dtNascimento})
          .catch(err=>console.log(err))
          .then(res => {
             dispatch(fetchFamilia());
          });
        });});
    } else {
      axios.get(`/familias/${familia.id}.json`)
          .catch(err => console.log(err))
          .then(resp => {
            const nomeFamiliar = familia.nomeFamiliar;
            const dtNascimento = familia.dtNascimento;
         axios.patch(`/familias/${familia.id}.json`,{nomeFamiliar,dtNascimento})
          .catch(err=>console.log(err))
          .then(res => {
             dispatch(fetchFamilia());
          });
        });
    }
  };
};


export const delFamilia = familia => {
  return dispatch => {
    axios.delete(`/familias/${familia.familiaId}.json`)
      .catch(err=>console.log(err))
      .then(res => {
        dispatch(fetchFamilia());
      });
  };
};

export const addVacina = vacina => {
  return (dispatch) => {
      axios.get(`/familias/${vacina.vacinaId}.json`)
          .catch(err => console.log(err))
          .then(res => {
              const vacinas = res.data.vacinas || [];
              vacinas.push(vacina.vacina);
              axios.patch(`/familias/${vacina.vacinaId}.json`, { vacinas })
                  .catch(err => console.log(err))
                  .then(res => {
                    dispatch(fetchFamilia());
                  });
          });
  };
};
