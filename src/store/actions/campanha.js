/* eslint-disable prettier/prettier */
import  {ADD_CAMPANHA, DLT_VACINA} from './actionTypes';

export const addCampanha = campanha => {
  return {
    type: ADD_CAMPANHA,
    payload: campanha,
  };
};

export const dltVacina = campanha => {
  return {
    type: DLT_VACINA,
    payload: campanha,
  };
};
