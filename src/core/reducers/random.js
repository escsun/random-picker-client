import * as RandomConstants  from '../constants/random';

const initialState = {
  error: ''
};

const randomReducer = (state = initialState, action) => {
  switch (action.type) {
    case RandomConstants.RANDOM_GET_RANDOM_NUMBER_FAILURE:
      return {
        ...state, error: action.payload.message
      };
    default:
      return state;
  }
};

export default randomReducer;
