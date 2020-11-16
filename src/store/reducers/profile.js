/* eslint-disable prettier/prettier */
import  {ADD_PROFILE, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  profile: [
    {
      id: Math.random(),
      imagem: require('../../assets/pink.png'),
      nome: 'pink',
      cpf: '02676215078',
      sus: '102030',
      email: 'pink_feia@hotmail.com',
      dtnascimento: '14/11/1940',
      sangue: 'O-',
      obs: 'alienigena',
    },
    {
      id: Math.random(),
      imagem: require('../../assets/moto.jpg'),
      nome: 'Anderson',
      cpf: '02676215078',
      sus: '1512326487',
      email: 'anderson.rodrigues@hotmail.com',
      dtnascimento: '14/11/1998',
      sangue: 'O-',
      obs: 'astro',
    },
    {
      id: Math.random(),
      imagem: require('../../assets/keyte.jpg'),
      nome: 'Kayte',
      cpf: '0264658948',
      sus: '265854984',
      email: 'keyte_linda@hotmail.com',
      dtnascimento: '14/11/2019',
      sangue: 'O-',
      obs: 'gata',
    },
  ],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case ADD_PROFILE:
        return {
          ...state,
          profile: state.profile.concat({
            ...action.payload,
          }),
        };
      case DLT_VACINA:
        return {
          ...state,
          profile: state.profile.map(profile =>{


          }),
        };
      default:
        return state;
    }
};

export default reducer;
