/* eslint-disable prettier/prettier */
import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import userReducer from './reducers/userReducers';
import vacinaReducer from './reducers/vacina';
import calendarioReducer from './reducers/calendario';
import campanhaReducer from './reducers/campanha';
import doencaReducer from './reducers/informacaoDoenca';
import minhasVacinasReducer from './reducers/minhasVacinas';
import familiaReducer from './reducers/family';
import profileReducer from './reducers/profile';
import messageReducer from './reducers/message';

const reducers = combineReducers({
  user: userReducer,
  vacina: vacinaReducer,
  calendario: calendarioReducer,
  campanha: campanhaReducer,
  doenca: doencaReducer,
  minhasVacinas: minhasVacinasReducer,
  familia: familiaReducer,
  profile: profileReducer,
  message: messageReducer,
});

const storeConfig = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)));
};

export default storeConfig;
