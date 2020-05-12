/* eslint-disable import/extensions */
import { Reducer } from 'redux';
import { RepositoriesState, RepositoriesTypes } from './types';

const initialState: RepositoriesState = {
  data: [{ id: 1, name: 'Pedro' }],
  error: false,
  loading: false,
};

const reducer: Reducer<RepositoriesState> = (state = initialState, action) => {
  switch (action.type) {
    case RepositoriesTypes.LOAD_REQUEST:
      return { ...state, loading: true };
    case RepositoriesTypes.LOAD_SUCCESS:
      return {
        ...state, loading: false, error: false, data: action.payload.data,
      };
    case RepositoriesTypes.LOAD_FAILURE:
      return { ...state, loading: false, data: [] };
    default:
      return state;
  }
};

export default reducer;
