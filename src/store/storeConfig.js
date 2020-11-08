/* eslint-disable prettier/prettier */
import {createStore, combineReducers} from 'redux';
import userReducer from './reducers/userReducers';

const reducers = combineReducers({
  user: userReducer,
});

const storeConfig = () => {
  return createStore(reducers);
};

export default storeConfig;
