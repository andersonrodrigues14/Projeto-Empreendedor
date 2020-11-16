/* eslint-disable prettier/prettier */
import  {ADD_PROFILE, DLT_VACINA} from './actionTypes';

export const addProfile = profile => {
  return {
    type: ADD_PROFILE,
    payload: profile,
  };
};

export const dltVacina = profile => {
  return {
    type: DLT_VACINA,
    payload: profile,
  };
};
