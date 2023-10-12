import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import { getPosts } from './actions/post.action';
import {getUser} from './actions/user.action';
import { createRoot } from 'react-dom/client';

const store = configureStore({
  reducer: rootReducer,
  devTools: true
})

store.dispatch(getPosts());
store.dispatch(getUser());

const root = document.getElementById('root');
const appRoot = createRoot(root);

appRoot.render(

    <Provider store={store}>
      <App />
    </Provider>

);

