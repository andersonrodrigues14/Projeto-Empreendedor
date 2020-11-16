/* eslint-disable prettier/prettier */
import  {ADD_CALENDARIO, DLT_VACINA} from './actionTypes';

export const addCalendario = calendario => {
  return {
    type: ADD_CALENDARIO,
    payload: calendario,
  };
};

export const dltVacina = calendario => {
  return {
    type: DLT_VACINA,
    payload: calendario,
  };
};
