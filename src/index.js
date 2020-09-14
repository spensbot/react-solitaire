import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App';
import gameReducer from './redux/gameSlice'
import generalReducer from './redux/generalSlice'

const store = configureStore({
  reducer: {
    game: gameReducer,
    general: generalReducer
  }
})

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

