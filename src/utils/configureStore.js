import { throttle } from 'lodash';
import { createStore } from 'redux';
import { loadState, saveState } from './localStorage';
import App from '../reducers';

const configureStore = () => {
  const persistedState = loadState();
  const store = createStore(App, persistedState);

  console.log('store', store.getState());
  // subscribe to the store and save it's state to localStorage anytime the state changes.
  store.subscribe(throttle(() => {
    saveState(store.getState());
  }, 1000));

  return store;
};

export default configureStore;
