import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.less';
import App from './router';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import {store} from './store'
import { HashRouter } from 'react-router-dom';
import RouterConfig from '@/router/router'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Provider store={store}>
    <HashRouter>
      <React.StrictMode>
        <RouterConfig />
      </React.StrictMode>
    </HashRouter>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
