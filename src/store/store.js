import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/index.js';

import { setLocalStorage } from '@utils/localStorage'

const store = configureStore({
  reducer: rootReducer,
});

// подпишемся на изменения store. При каждом его изменении будет изменяться запись в локальном хранилище
store.subscribe(() => {
  setLocalStorage('store', store.getState().favoriteReducer);
}); 

export default store;
