/* eslint-disable prettier/prettier */
import  {ADD_INFORMACAODOENCA, DLT_VACINA} from './actionTypes';

export const addDoenca = doenca => {
  return {
    type: ADD_INFORMACAODOENCA,
    payload: doenca,
  };
};

export const dltVacina = doenca => {
  return {
    type: DLT_VACINA,
    payload: doenca,
  };
};
