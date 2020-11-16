/* eslint-disable prettier/prettier */
import  {ADD_FAMILIA, DLT_VACINA} from './actionTypes';

export const addFamilia = familia => {
  return {
    type: ADD_FAMILIA,
    payload: familia,
  };
};

export const dltVacina = familia => {
  return {
    type: DLT_VACINA,
    payload: familia,
  };
};
