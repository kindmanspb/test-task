import { createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
import { devToolsEnhancer } from 'redux-devtools-extension';

export const store = createStore(
  rootReducer(),
  devToolsEnhancer({ trace: true, traceLimit: 25 }),
);
