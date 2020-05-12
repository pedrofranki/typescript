/* eslint-disable import/extensions */
import { createStore, Store } from 'redux';
import rootReducer from './ducks/rootReducer';
import { RepositoriesState } from './ducks/repositories/types';

export interface ApplicationState {
    repositories: RepositoriesState
}

const store: Store<ApplicationState> = createStore(rootReducer);

export default store;
