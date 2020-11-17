/* eslint-disable prettier/prettier */
import  {SET_PROFILE, DLT_VACINA} from './actionTypes';
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

        dispatch(setProfile(profile));
      });
  };
};

export const dltVacina = profile => {
  return {
    type: DLT_VACINA,
    payload: profile,
  };
};
