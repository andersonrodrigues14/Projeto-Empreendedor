/* eslint-disable prettier/prettier */
import  {ADD_VACINA, DLT_VACINA} from './actionTypes';

export const addVacina = vacina => {
  return {
    type: ADD_VACINA,
    payload: vacina,
  };
};

export const dltVacina = vacina => {
  return {
    type: DLT_VACINA,
    payload: vacina,
  };
};
