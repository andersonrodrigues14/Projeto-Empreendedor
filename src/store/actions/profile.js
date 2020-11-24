/* eslint-disable prettier/prettier */
import  {SET_PROFILE} from './actionTypes';
import axios from 'axios';

export const addProfile = profile => {
  return dispatch => {
    axios({
      url:'uploadImage',
      baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
      method:'post',
      data:{
        image: profile.imagem.base64,
      },
    }) .catch(err => console.log(err))
       .then(resp => {
        profile.imagem = resp.data.imageUrl;
        axios.post('/users.json',{...profile})
        .catch(err => console.log(err))
        .then(res => console.log(res.data));});
  };
};

export const setProfile = profile => {
  return {
    type:SET_PROFILE,
    payload: profile,
  };
};

//busca dados do banco
export const fetchProfile = () => {
  return dispatch => {
    axios.get('/users.json')
      .catch(err => console.log(err))
      .then(res => {
        const rawProfile = res.data;
        const profile = [];
        for (let key in rawProfile){
          profile.push({
            ...rawProfile[key],
            id: key,
          });
        }
        dispatch(setProfile(profile.reverse()));
      });
  };
};

//busca dados do banco
export const fetchProfile2 = user => {
  return dispatch => {
    console.log(user.userId);
    axios.get(`/users/${user.userId}.json`)
      .catch(err => console.log(err))
      .then(res => {
        const profile = [res.data];
        dispatch(setProfile(profile));
      });
  };
};

export const edtProfile = profile => {
  return dispatch => {
    if (profile.imagem.base64 != null){
      axios({
        url:'uploadImage',
        baseURL:'https://us-central1-carteiradevacinacaodigital.cloudfunctions.net',
        method:'post',
        data:{
          image: profile.imagem.base64,
        },
      }) .catch(err => console.log(err))
      .then(respo => {
          axios.get(`/users/${profile.id}.json`)
            .catch(err => console.log(err))
            .then(resp => {
           profile.imagem = respo.data.imageUrl;
           const imagem = profile.imagem;
           const nome = profile.nome;
           const texto = profile.texto;
           const cpf = profile.cpf;
           const sus = profile.sus;
           const email = profile.email;
           const dtnascimento = profile.dtnascimento;
           const sangue = profile.sangue;
           const obs = profile.obs;
           const senha = profile.senha;
           axios.patch(`/users/${profile.id}.json`,{imagem,nome,texto,cpf,sus,email,
            dtnascimento,sangue,obs,senha})
            .catch(err=>console.log(err))
            .then(res => {
               dispatch(fetchProfile());
            });
          });});
      } else {
        axios.get(`/users/${profile.id}.json`)
            .catch(err => console.log(err))
            .then(resp => {
           const nome = profile.nome;
           const texto = profile.texto;
           const cpf = profile.cpf;
           const sus = profile.sus;
           const email = profile.email;
           const dtnascimento = profile.dtnascimento;
           const sangue = profile.sangue;
           const obs = profile.obs;
           const senha = profile.senha;
           axios.patch(`/users/${profile.id}.json`,{nome,texto,cpf,sus,email,
            dtnascimento,sangue,obs,senha})
            .catch(err=>console.log(err))
            .then(res => {
               dispatch(fetchProfile());
            });
          });
      }
    };
};

export const delProfile = profile => {
  return dispatch => {
    axios.delete(`/users/${profile.profileId}.json`)
      .catch(err=>console.log(err))
      .then(res => {
        dispatch(setProfile());
      });
  };
};
