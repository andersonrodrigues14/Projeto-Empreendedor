/* eslint-disable prettier/prettier */
import  {ADD_MINHASVACINAS, DLT_VACINA} from './actionTypes';

export const addMinhasVacinas = minhasVacinas => {
  return {
    type: ADD_MINHASVACINAS,
    payload: minhasVacinas,
  };
};

export const dltVacina = minhasVacinas => {
  return {
    type: DLT_VACINA,
    payload: minhasVacinas,
  };
};
