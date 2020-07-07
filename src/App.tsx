import React from 'react';
import { Provider } from 'react-redux';
import { InitialView } from './views/initial-view/InitialView';
import { store } from './store/store';

function App() {
  return (
    <Provider store={store}>
      <InitialView />
    </Provider>
  );
}

export default App;
