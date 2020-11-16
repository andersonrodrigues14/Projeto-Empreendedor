/* eslint-disable prettier/prettier */
import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducers';
import vacinaReducer from './reducers/vacina';
import calendarioReducer from './reducers/calendario';
import campanhaReducer from './reducers/campanha';
import doencaReducer from './reducers/informacaoDoenca';
import minhasVacinasReducer from './reducers/minhasVacinas';
import familiaReducer from './reducers/family';
import profileReducer from './reducers/profile';

const reducers = combineReducers({
  user: userReducer,
  vacina: vacinaReducer,
  calendario: calendarioReducer,
  campanha: campanhaReducer,
  doenca: doencaReducer,
  minhasVacinas : minhasVacinasReducer,
  familia : familiaReducer,
  profile : profileReducer,
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
