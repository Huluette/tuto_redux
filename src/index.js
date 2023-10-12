import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { getPosts } from './actions/post.action';

const store = configureStore({
  reducer: rootReducer,
  devTools: false
})

store.dispatch(getPosts());

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <provider store={store}>
      <App />
    </provider>
  </React.StrictMode>
);

