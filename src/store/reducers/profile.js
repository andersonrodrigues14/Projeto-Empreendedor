/* eslint-disable prettier/prettier */
import  {SET_PROFILE, DLT_VACINA} from '../actions/actionTypes';

const initialState = {
  profile: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type){
      case SET_PROFILE:
        return {
          ...state,
          profile:action.payload,
        };
      case DLT_VACINA:
        return {
          ...state,
          profile: state.profile.map(profile =>{


          }),
        };
      default:
        return state;
    }
};

export default reducer;
